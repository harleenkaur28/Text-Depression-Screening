import Link from "next/link";
import { ArrowLeft, Flower } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#f6f7f8] dark:bg-[#101922] text-[#0d141b] dark:text-slate-50 font-sans">
			<div className="absolute top-0 left-0 w-full px-4 py-5 sm:px-8">
				<header className="flex items-center justify-start gap-4">
					<div className="size-6 text-[#137fec]">
						<Flower className="w-full h-full" />
					</div>
					<h2 className="text-lg font-bold tracking-[-0.015em]">
						Student Wellness
					</h2>
				</header>
			</div>
			<div className="w-full max-w-md p-4">
				<div className="flex w-full flex-col gap-8 rounded-xl bg-white dark:bg-[#101922] dark:border dark:border-slate-800 p-8 shadow-sm">
					<div className="flex flex-col gap-3 text-center">
						<h1 className="text-3xl font-black tracking-tighter">
							Forgot Your Password?
						</h1>
						<p className="text-sm text-[#4c739a] dark:text-slate-400">
							No problem. Enter the email address you used to sign up, and
							we&apos;ll send you a link to reset your password.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<Label className="flex flex-col gap-2">
							<p className="text-sm font-medium">Email Address</p>
							<Input
								type="email"
								placeholder="your.name@university.edu"
								className="w-full rounded-lg border border-slate-300 bg-[#f6f7f8] px-4 py-3 text-base text-[#0d141b] placeholder:text-slate-400 focus-visible:border-[#137fec] focus-visible:ring-[#137fec]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:focus-visible:border-[#137fec] h-auto"
							/>
						</Label>
						<Button className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-[#137fec] text-base font-bold text-white transition-colors hover:bg-[#137fec]/90">
							<span>Send Reset Link</span>
						</Button>
					</div>
					<Link
						href="/login"
						className="text-center text-sm text-[#4c739a] underline hover:text-[#137fec] dark:text-slate-400 dark:hover:text-[#137fec]"
					>
						Back to Login
					</Link>
				</div>
			</div>
		</div>
	);
}
