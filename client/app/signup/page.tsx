import Link from "next/link";
import { EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-[#FCFCFC] dark:bg-[#101922] text-[#333333] dark:text-[#E0E0E0] font-sans">
			<main className="w-full max-w-md">
				<div className="mb-8 text-center">
					<h1 className="text-4xl font-black tracking-[-0.033em]">
						Create Your Account
					</h1>
					<p className="mt-2 text-base text-[#555555] dark:text-[#A0A0A0]">
						A safe space to understand your well-being.
					</p>
				</div>
				<div className="rounded-xl bg-[#F0F0F0] dark:bg-[#192734] p-8 shadow-sm">
					<form className="flex flex-col gap-6">
						<div className="flex flex-col gap-1.5">
							<Label htmlFor="email" className="text-base font-medium">
								Email Address
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email address"
								className="h-14 w-full rounded-lg border border-[#DCDCDC] bg-[#FCFCFC] p-4 text-base placeholder:text-[#555555] focus-visible:border-[#72A0C1] focus-visible:ring-[#72A0C1]/30 dark:border-[#334155] dark:bg-[#101922] dark:placeholder:text-[#A0A0A0] dark:focus-visible:border-[#72A0C1]"
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
									className="h-14 w-full rounded-lg border border-[#DCDCDC] bg-[#FCFCFC] p-4 pr-12 text-base placeholder:text-[#555555] focus-visible:border-[#72A0C1] focus-visible:ring-[#72A0C1]/30 dark:border-[#334155] dark:bg-[#101922] dark:placeholder:text-[#A0A0A0] dark:focus-visible:border-[#72A0C1]"
								/>
								<button
									type="button"
									className="absolute right-0 mr-4 text-[#555555] dark:text-[#A0A0A0]"
								>
									<EyeOff className="w-5 h-5" />
								</button>
							</div>
							<p className="px-1 pt-1 text-sm text-[#555555] dark:text-[#A0A0A0]">
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
								className="h-14 w-full rounded-lg border border-[#DCDCDC] bg-[#FCFCFC] p-4 text-base placeholder:text-[#555555] focus-visible:border-[#72A0C1] focus-visible:ring-[#72A0C1]/30 dark:border-[#334155] dark:bg-[#101922] dark:placeholder:text-[#A0A0A0] dark:focus-visible:border-[#72A0C1]"
							/>
						</div>
						<Button
							type="submit"
							className="mt-2 flex h-14 w-full items-center justify-center rounded-lg bg-[#72A0C1] text-base font-bold text-white transition-colors hover:bg-[#72A0C1]/90"
						>
							Create Account
						</Button>
					</form>
				</div>
				<div className="mt-6 text-center">
					<p className="text-sm text-[#555555] dark:text-[#A0A0A0]">
						By signing up, you agree to our{" "}
						<Link
							href="#"
							className="font-medium text-[#72A0C1] hover:underline"
						>
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link
							href="#"
							className="font-medium text-[#72A0C1] hover:underline"
						>
							Privacy Policy
						</Link>
						.
					</p>
					<p className="mt-4 text-base text-[#555555] dark:text-[#A0A0A0]">
						Already have an account?{" "}
						<Link
							href="/login"
							className="font-bold text-[#72A0C1] hover:underline"
						>
							Log In
						</Link>
					</p>
				</div>
			</main>
		</div>
	);
}
