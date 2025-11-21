import Link from "next/link";
import { EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-background-light dark:bg-background-dark text-neutral-dark-gray dark:text-gray-200 font-sans">
			<main className="w-full max-w-md">
				<div className="mb-8 text-center">
					<h1 className="text-4xl font-black tracking-[-0.033em]">
						Create Your Account
					</h1>
					<p className="mt-2 text-base text-gray-500 dark:text-gray-400">
						A safe space to understand your well-being.
					</p>
				</div>
				<div className="rounded-xl bg-white dark:bg-gray-800/50 p-8 shadow-sm border border-gray-200 dark:border-gray-700">
					<form className="flex flex-col gap-6">
						<div className="flex flex-col gap-1.5">
							<Label htmlFor="email" className="text-base font-medium">
								Email Address
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email address"
								className="h-14 w-full rounded-lg border border-gray-300 bg-white p-4 text-base placeholder:text-gray-400 focus-visible:border-calm-blue focus-visible:ring-calm-blue/30 dark:border-gray-600 dark:bg-background-dark dark:placeholder:text-gray-500 dark:focus-visible:border-calm-blue"
							/>
						</div>
						<div className="flex flex-col gap-1.5">
							<Label htmlFor="password" className="text-base font-medium">
								Create Password
							</Label>
							<div className="relative flex w-full items-center">
								<Input
									id="password"
									type="password"
									placeholder="Enter a strong password"
									className="h-14 w-full rounded-lg border border-gray-300 bg-white p-4 pr-12 text-base placeholder:text-gray-400 focus-visible:border-calm-blue focus-visible:ring-calm-blue/30 dark:border-gray-600 dark:bg-background-dark dark:placeholder:text-gray-500 dark:focus-visible:border-calm-blue"
								/>
								<button
									type="button"
									className="absolute right-0 mr-4 text-gray-500 dark:text-gray-400"
								>
									<EyeOff className="w-5 h-5" />
								</button>
							</div>
							<p className="px-1 pt-1 text-sm text-gray-500 dark:text-gray-400">
								Must be at least 8 characters, include a number and a symbol.
							</p>
						</div>
						<div className="flex flex-col gap-1.5">
							<Label
								htmlFor="confirm-password"
								className="text-base font-medium"
							>
								Confirm Password
							</Label>
							<Input
								id="confirm-password"
								type="password"
								placeholder="Re-enter your password"
								className="h-14 w-full rounded-lg border border-gray-300 bg-white p-4 text-base placeholder:text-gray-400 focus-visible:border-calm-blue focus-visible:ring-calm-blue/30 dark:border-gray-600 dark:bg-background-dark dark:placeholder:text-gray-500 dark:focus-visible:border-calm-blue"
							/>
						</div>
						<Button
							type="submit"
							className="mt-2 flex h-14 w-full items-center justify-center rounded-lg bg-calm-blue text-base font-bold text-white transition-colors hover:bg-calm-blue/90"
						>
							Create Account
						</Button>
					</form>
				</div>
				<div className="mt-6 text-center">
					<p className="text-sm text-gray-500 dark:text-gray-400">
						By signing up, you agree to our{" "}
						<Link
							href="#"
							className="font-medium text-muted-teal hover:underline"
						>
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link
							href="#"
							className="font-medium text-muted-teal hover:underline"
						>
							Privacy Policy
						</Link>
						.
					</p>
					<p className="mt-4 text-base text-gray-500 dark:text-gray-400">
						Already have an account?{" "}
						<Link
							href="/login"
							className="font-bold text-muted-teal hover:underline"
						>
							Log In
						</Link>
					</p>
				</div>
			</main>
		</div>
	);
}
