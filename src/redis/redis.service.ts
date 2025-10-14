import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { ClientProxyFactory, Transport, ClientProxy, RedisOptions } from '@nestjs/microservices';

@Injectable()
export class RedisService {
    private cacheClient: Redis;
    private microserviceClient: ClientProxy;

    constructor(private configService: ConfigService) {
        // Cache client
        this.cacheClient = new Redis({
            host: this.configService.get<string>('REDIS_HOST') || 'localhost',
            port: parseInt(this.configService.get<string>('REDIS_PORT') || '6379'),
        });

        // Microservice client
        this.microserviceClient = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options: {
                host: this.configService.get<string>('REDIS_HOST') || 'localhost',
                port: parseInt(this.configService.get<string>('REDIS_PORT') || '6379'),
                retryAttempts: 5,
                retryDelay: 3000,
                wildcards: true,
            },
        });

    }

    // ---------------- Cache methods ----------------
    async set(key: string, value: string, ttl?: number) {
        if (ttl) {
            await this.cacheClient.set(key, value, 'EX', ttl);
        } else {
            await this.cacheClient.set(key, value);
        }
    }

    async get(key: string) {
        return this.cacheClient.get(key);
    }

    async del(key: string) {
        return this.cacheClient.del(key);
    }

    // ---------------- Microservice methods ----------------
    send(pattern: string, data: any) {
        return this.microserviceClient.send(pattern, data).toPromise();
    }

    emit(pattern: string, data: any) {
        this.microserviceClient.emit(pattern, data);
    }
}
