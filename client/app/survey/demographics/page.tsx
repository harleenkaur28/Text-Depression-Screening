"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function DemographicsPage() {
	const searchParams = useSearchParams();
	const format = searchParams.get("format") || "mcq";

	return (
		<div className="relative flex min-h-screen w-full flex-col bg-[#f6f7f8] dark:bg-[#101922] font-sans text-gray-800 dark:text-gray-200">
			<div className="layout-container flex h-full grow flex-col">
				<div className="flex flex-1 justify-center p-4 sm:p-6 md:p-10">
					<div className="layout-content-container flex flex-col w-full max-w-2xl flex-1 gap-8">
						{/* Progress Bar */}
						<div className="flex flex-col gap-2">
							<p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
								Step 1 of 5
							</p>
							<div className="rounded-full bg-gray-200 dark:bg-gray-700 h-2">
								<div
									className="h-2 rounded-full bg-[#137fec]"
									style={{ width: "20%" }}
								></div>
							</div>
						</div>
						{/* Page Heading */}
						<div className="flex flex-wrap justify-between gap-3">
							<div className="flex flex-col gap-2">
								<p className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight">
									About You
								</p>
								<p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal">
									This information helps us understand the survey responses
									better. Your answers are anonymous.
								</p>
							</div>
						</div>
						{/* Form Content */}
						<div className="flex flex-col gap-8">
							{/* Academic Year Question */}
							<div className="flex flex-col gap-4">
								<div>
									<h1 className="text-gray-900 dark:text-white text-lg font-semibold leading-tight">
										What is your current academic year?
									</h1>
									<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal pt-1">
										Required
									</p>
								</div>
								<RadioGroup className="flex flex-col gap-3">
									{["1st", "2nd", "3rd", "4th", "5th+"].map((year) => (
										<Label
											key={year}
											className="flex items-center gap-4 rounded-lg border border-solid border-gray-300 dark:border-gray-700 p-4 cursor-pointer hover:border-[#137fec] dark:hover:border-[#137fec] transition-colors duration-200 has-[:checked]:border-[#137fec] has-[:checked]:bg-[#137fec]/10 dark:has-[:checked]:bg-[#137fec]/20"
										>
											<RadioGroupItem
												value={year}
												id={`year-${year}`}
												className="text-[#137fec] border-gray-300 dark:border-gray-600"
											/>
											<span className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
												{year}
											</span>
										</Label>
									))}
								</RadioGroup>
							</div>
							{/* Age Question */}
							<div className="flex flex-col gap-4">
								<div>
									<h1 className="text-gray-900 dark:text-white text-lg font-semibold leading-tight">
										What is your age range?
									</h1>
									<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal pt-1">
										Required
									</p>
								</div>
								<RadioGroup
									className="flex flex-col gap-3"
									defaultValue="18-22"
								>
									{["Below 18", "18-22", "22-25"].map((age) => (
										<Label
											key={age}
											className="flex items-center gap-4 rounded-lg border border-solid border-gray-300 dark:border-gray-700 p-4 cursor-pointer hover:border-[#137fec] dark:hover:border-[#137fec] transition-colors duration-200 has-[:checked]:border-[#137fec] has-[:checked]:bg-[#137fec]/10 dark:has-[:checked]:bg-[#137fec]/20"
										>
											<RadioGroupItem
												value={age}
												id={`age-${age}`}
												className="text-[#137fec] border-gray-300 dark:border-gray-600"
											/>
											<span className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
												{age}
											</span>
										</Label>
									))}
								</RadioGroup>
							</div>
							{/* Gender Question */}
							<div className="flex flex-col gap-4">
								<div>
									<h1 className="text-gray-900 dark:text-white text-lg font-semibold leading-tight">
										How do you identify?
									</h1>
									<p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal pt-1">
										Required
									</p>
								</div>
								<RadioGroup className="flex flex-col gap-3">
									{["Male", "Female", "Prefer not to say"].map((gender) => (
										<Label
											key={gender}
											className="flex items-center gap-4 rounded-lg border border-solid border-gray-300 dark:border-gray-700 p-4 cursor-pointer hover:border-[#137fec] dark:hover:border-[#137fec] transition-colors duration-200 has-[:checked]:border-[#137fec] has-[:checked]:bg-[#137fec]/10 dark:has-[:checked]:bg-[#137fec]/20"
										>
											<RadioGroupItem
												value={gender}
												id={`gender-${gender}`}
												className="text-[#137fec] border-gray-300 dark:border-gray-600"
											/>
											<span className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
												{gender}
											</span>
										</Label>
									))}
									<div className="flex flex-col gap-3 rounded-lg border border-solid border-gray-300 dark:border-gray-700 p-4 transition-colors duration-200 has-[:checked]:border-[#137fec] has-[:checked]:bg-[#137fec]/10 dark:has-[:checked]:bg-[#137fec]/20 has-[:focus-within]:border-[#137fec] has-[:focus-within]:bg-[#137fec]/10 dark:has-[:focus-within]:bg-[#137fec]/20">
										<Label className="flex items-center gap-4 cursor-pointer">
											<RadioGroupItem
												value="Other"
												id="gender-other"
												className="text-[#137fec] border-gray-300 dark:border-gray-600"
											/>
											<span className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
												Other
											</span>
										</Label>
										<Input
											type="text"
											placeholder="Please specify"
											className="mt-2 ml-9 block w-[calc(100%-2.25rem)] border-0 border-b border-gray-400 dark:border-gray-600 bg-transparent p-1 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus-visible:border-[#137fec] focus-visible:ring-0 rounded-none shadow-none"
										/>
									</div>
								</RadioGroup>
							</div>
						</div>
						{/* Navigation */}
						<div className="flex justify-end pt-4">
							<Link href={`/survey/q/1?format=${format}`}>
								<Button className="flex items-center justify-center gap-2 rounded-lg bg-[#137fec] px-5 py-6 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#137fec]/90">
									<span>Next</span>
									<ArrowRight className="w-5 h-5" />
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
