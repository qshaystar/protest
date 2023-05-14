import { useRouter } from "next/router";

import { MenuBar, CardList, AddCardListButton } from "@/components/board";
import { classNames } from "primereact/utils";
import Head from "next/head";

export default function Board() {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Horae - 看板</title>
			</Head>

			<MenuBar />

			<div className="flex px-16 py-12">
				<div className="mr-5">
					<CardList />
				</div>

				<AddCardListButton />
			</div>

			{/* <Button
        className="p-0"
        label="前往個人頁面"
        onClick={() => router.push("/profile")}
        link
      /> */}
		</div>
	);
}
