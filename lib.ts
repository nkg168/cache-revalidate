import { cache } from "react";

// 現在の日時を取得する関数
export const getCurrentTimeAsync = cache(async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return new Date().toLocaleTimeString();
});

export const getCurrentTime = cache(() => new Date().toLocaleTimeString());
