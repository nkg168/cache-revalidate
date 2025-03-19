import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const createItem = async (item: string) => redis.rpush("item", item);

export const getItems = async () => redis.lrange("item", 0, -1);

export const deleteItem = async (item: string) => redis.lrem("item", 0, item); // 該当するアイテムを全部削除
