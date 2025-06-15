import { useEffect, useState } from "react";
import { Response } from "../../../shared/types";

export async function useDeletePost(id: number) {
	try {
		const response = await fetch(
			`http://192.168.0.51:8000/api/posts/delete/${id}`
		);
		const result: Response<string> = await response.json();
		console.log(result);
	} catch (error) {
		const err = error instanceof Error ? error.message : undefined;
		console.log(err);
	}
}
