"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Lock, Timer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
	const searchParams = useSearchParams();
	const format = searchParams.get("format") || "mcq";

	return (
		<div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f6f7f8] dark:bg-[#101922] overflow-x-hidden font-sans">
			<div className="layout-container flex h-full grow flex-col">
				<div className="px-4 flex flex-1 justify-center py-5">
					<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
						<header className="flex items-center justify-between whitespace-nowrap px-10 py-3">
							<div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
								<div className="size-20 relative">
									<Image
										src="/logo.png"
										alt="MindfulAI Logo"
										fill
										className="object-contain"
									/>
								</div>
								<h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">
									MindfulAI
								</h2>
							</div>
						</header>
						<main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
							<div className="flex flex-col gap-8 w-full max-w-2xl bg-white dark:bg-slate-900/50 shadow-sm rounded-xl p-8 sm:p-12">
								<div className="flex flex-col gap-3 text-center">
									<p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
										Student Mental Health &amp; Well-being Survey
									</p>
									<p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal max-w-xl mx-auto">
										Thank you for taking the time to participate. Your feedback
										is invaluable in our effort to better understand and support
										student well-being on campus.
									</p>
								</div>
								<div className="flex flex-col gap-4">
									<div className="flex items-start gap-4 bg-white dark:bg-transparent px-4 min-h-[72px] py-2 justify-between border-b border-slate-100 dark:border-slate-800">
										<div className="flex items-center gap-4 w-full">
											<div className="text-slate-600 dark:text-slate-400 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
												<Lock className="w-6 h-6" />
											</div>
											<div className="flex flex-col justify-center">
												<p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
													Completely Confidential
												</p>
												<p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
													Your responses are anonymous and will be kept strictly
													confidential.
												</p>
											</div>
										</div>
									</div>
									<div className="flex items-start gap-4 bg-white dark:bg-transparent px-4 min-h-[72px] py-2 justify-between border-b border-slate-100 dark:border-slate-800">
										<div className="flex items-center gap-4 w-full">
											<div className="text-slate-600 dark:text-slate-400 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
												<Timer className="w-6 h-6" />
											</div>
											<div className="flex flex-col justify-center">
												<p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
													Time Estimate
												</p>
												<p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
													This survey takes approximately 10-15 minutes to
													complete.
												</p>
											</div>
										</div>
									</div>
									<div className="flex items-start gap-4 bg-white dark:bg-transparent px-4 min-h-[72px] py-2 justify-between">
										<div className="flex items-center gap-4 w-full">
											<div className="text-slate-600 dark:text-slate-400 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
												<ShieldCheck className="w-6 h-6" />
											</div>
											<div className="flex flex-col justify-center">
												<p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
													Voluntary Participation
												</p>
												<p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
													Your participation is completely voluntary, and you
													may withdraw at any time.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="flex justify-center pt-4">
									<Link
										href={`/survey/demographics?format=${format}`}
										className="w-full max-w-xs"
									>
										<Button className="w-full h-12 text-base font-bold bg-[#137fec] hover:bg-[#137fec]/90 text-white rounded-lg">
											Start Survey
										</Button>
									</Link>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
}
