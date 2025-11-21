import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-[#f6f7f8] dark:bg-[#101922] font-sans p-4">
			<main className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
				<h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
					Student Mental Health Survey
				</h1>
				<p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
					Welcome to the implementation of the reference design.
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<Link href="/login">
						<Button className="bg-[#137fec] hover:bg-[#137fec]/90 text-white">
							Log In
						</Button>
					</Link>
					<Link href="/signup">
						<Button variant="outline">Sign Up</Button>
					</Link>
					<Link href="/survey/choose-format">
						<Button variant="secondary">Start Survey</Button>
					</Link>
				</div>
			</main>
		</div>
	);
}
