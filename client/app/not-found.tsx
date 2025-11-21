import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark overflow-x-hidden font-sans p-4">
			<div className="w-full max-w-md space-y-8 text-center">
				{/* Logo */}
				<div className="flex justify-center items-center gap-3 mb-8">
					<div className="relative w-16 h-16">
						<Image
							src="/logo.png"
							alt="MindfulAI Logo"
							fill
							className="object-contain"
						/>
					</div>
					<span className="text-2xl font-bold text-neutral-dark-gray dark:text-neutral-off-white">
						MindfulAI
					</span>
				</div>

				{/* 404 Content */}
				<div className="space-y-6 animate-in fade-in zoom-in duration-500">
					<div className="relative">
						<h1 className="text-9xl font-black text-calm-blue/20 select-none">
							404
						</h1>
						<div className="absolute inset-0 flex items-center justify-center">
							<h2 className="text-3xl font-bold tracking-tight text-neutral-dark-gray dark:text-neutral-off-white sm:text-4xl">
								Page not found
							</h2>
						</div>
					</div>

					<p className="text-lg text-neutral-dark-gray/80 dark:text-gray-300 max-w-sm mx-auto">
						Sorry, we couldn't find the page you're looking for. It might have
						been removed, renamed, or doesn't exist.
					</p>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
						<Button
							asChild
							size="lg"
							className="w-full sm:w-auto gap-2 bg-calm-blue hover:bg-calm-blue/90 text-white font-medium rounded-lg h-12 px-8"
						>
							<Link href="/">
								<MoveLeft className="h-4 w-4" />
								Back to Home
							</Link>
						</Button>
						<Button
							variant="outline"
							size="lg"
							asChild
							className="w-full sm:w-auto border-calm-blue text-calm-blue hover:bg-calm-blue/10 hover:text-calm-blue font-medium rounded-lg h-12 px-8 bg-transparent"
						>
							<Link href="/login">Login</Link>
						</Button>
					</div>
				</div>
			</div>

			{/* Footer Links (consistent with Login page) */}
			<div className="absolute bottom-6 text-center text-xs text-gray-500 dark:text-gray-400">
				<p>
					<Link
						href="#"
						className="hover:underline hover:text-calm-blue transition-colors"
					>
						Privacy Policy
					</Link>{" "}
					·{" "}
					<Link
						href="#"
						className="hover:underline hover:text-calm-blue transition-colors"
					>
						Support
					</Link>
				</p>
			</div>
		</div>
	);
}
