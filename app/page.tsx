"use client";

import { useChat } from "ai/react";
import Button from "@mui/material/Button";
import { Input } from "@mui/base/Input";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();

	return (
		<>
			<div className="mx-auto w-[80%] h-screen  bg-slate-700  py-10 flex  flex-col ">
				<h1 className="text-4xl font-bold pb-12 flex gap-2 items-center justify-center ">
					<Avatar
						alt="Robo"
						src="/Dolores.webp"
						sx={{ width: 56, height: 56 }}
					/>
					Dolores's Chat
				</h1>
				<div className="border-2 border-slate-500 h-[80%] bg-slate-600 overflow-auto p-5 rounded-xl">
					{messages.map((m) => (
						<div className=" flex gap-2 py-2 " key={m.id}>
							{m.role === "user" ? (
								<Avatar>
									<PersonIcon />
								</Avatar>
							) : (
								<Avatar alt="Robo" src="/Dolores.webp" />
							)}
							{m.content}
						</div>
					))}
				</div>

				<form
					className="  flex gap-2 items-center justify-center py-5 "
					onSubmit={handleSubmit}
				>
					<Input
						className=" w-[60%] "
						slotProps={{
							input: {
								className:
									"w-full text-sm bg-gray-800  transition-all duration-300 font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-900 focus:shadow-outline-purple  focus:shadow-lg border-2 border-slate-500 hover:border-purple-500  focus:border-purple-500   text-slate-100  focus-visible:outline-0",
							},
						}}
						value={input}
						onChange={handleInputChange}
						placeholder="Type something in english (Digite algo em inglês) ..."
					/>

					<div className=" ">
						<Button variant="contained" type="submit" endIcon={<SendIcon />}>
							Send
						</Button>
					</div>
				</form>
				<Link
					href="https://julianobresolinux.vercel.app/"
					target="_blank"
					className="hover:underline hover:text-teal-400"
				>
					<h3 className=" text-center text-sm transition-all duration-300">
						Created by: Juliano Bresolin
					</h3>
				</Link>
			</div>
		</>
	);
}
