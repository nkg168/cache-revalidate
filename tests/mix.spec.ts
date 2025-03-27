import { expect, test } from "@playwright/test";

test("ロギングするだけのアクションを実行しても再レンダリングされない", async ({
	page,
}) => {
	await page.goto("http://localhost:3000/mix");
	const initialRenderTime = await page
		.getByTestId("root-layout-render-time")
		.textContent();
	await page.getByRole("button", { name: "Just call" }).click();
	expect(await page.getByTestId("root-layout-render-time").textContent()).toBe(
		initialRenderTime,
	);
});
