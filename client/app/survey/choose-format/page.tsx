"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { List, Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ChooseFormatPage() {
	const router = useRouter();
	const [format, setFormat] = React.useState<"mcq" | "text" | null>(null);

	React.useEffect(() => {
		router.push(`/survey/welcome?format=text`);
	}, [router]);

	const handleContinue = () => {
		if (format) {
			router.push(`/survey/welcome?format=${format}`);
		}
	};

	return (
		<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-sans text-neutral-dark-gray dark:text-gray-200">
			<div className="layout-container flex h-full grow flex-col">
				<div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
					<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
						<div className="flex flex-col gap-3 p-4">
							<div className="flex gap-6 justify-between">
								<p className="text-neutral-dark-gray dark:text-gray-200 text-base font-medium leading-normal">
									Student Wellness Survey
								</p>
							</div>
							<div className="rounded-full bg-gray-300 dark:bg-gray-600 h-2">
								<div
									className="h-2 rounded-full bg-calm-blue"
									style={{ width: "33%" }}
								></div>
							</div>
							<p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
								Step 1 of 3: Choose Your Format
							</p>
						</div>
						<h1 className="text-neutral-dark-gray dark:text-gray-200 tracking-tight text-2xl sm:text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-12">
							Choose how you&apos;d like to respond.
						</h1>
						<p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal pb-8 pt-1 px-4 text-center">
							Select the format that feels most comfortable for you.
						</p>
						<RadioGroup
							className="flex flex-col gap-4 p-4"
							value={format || ""}
							onValueChange={(value) => setFormat(value as "mcq" | "text")}
						>
							<Label
								className={`flex items-start gap-4 rounded-xl border-2 border-solid p-4 sm:p-6 cursor-pointer bg-white dark:bg-gray-800/50 transition-all duration-200 ease-in-out ${
									format === "mcq"
										? "border-calm-blue bg-calm-blue/10 dark:bg-calm-blue/20"
										: "border-gray-300 dark:border-gray-600"
								}`}
							>
								<List className="w-6 h-6 sm:w-8 sm:h-8 text-calm-blue mt-1" />
								<div className="flex grow flex-col">
									<p className="text-neutral-dark-gray dark:text-gray-200 text-base font-medium leading-normal">
										Multiple Choice Questions
									</p>
									<p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal mt-1">
										Answer each question by selecting from a predefined list of
										options. This is the standard and quickest method.
									</p>
								</div>
								<RadioGroupItem
									value="mcq"
									id="format-mcq"
									className="text-calm-blue border-gray-300 dark:border-gray-600"
								/>
							</Label>
							<Label
								className={`flex items-start gap-4 rounded-xl border-2 border-solid p-4 sm:p-6 cursor-pointer bg-white dark:bg-gray-800/50 transition-all duration-200 ease-in-out ${
									format === "text"
										? "border-calm-blue bg-calm-blue/10 dark:bg-calm-blue/20"
										: "border-gray-300 dark:border-gray-600"
								}`}
							>
								<Keyboard className="w-6 h-6 sm:w-8 sm:h-8 text-calm-blue mt-1" />
								<div className="flex grow flex-col">
									<p className="text-neutral-dark-gray dark:text-gray-200 text-base font-medium leading-normal">
										Text Input Responses
									</p>
									<p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal mt-1">
										Describe your feelings in your own words. Your text will be
										analyzed to determine the most fitting response.
									</p>
								</div>
								<RadioGroupItem
									value="text"
									id="format-text"
									className="text-calm-blue border-gray-300 dark:border-gray-600"
								/>
							</Label>
						</RadioGroup>
						<div className="flex flex-col sm:flex-row px-4 py-8 justify-center gap-4">
							<Button
								onClick={() => router.back()}
								variant="ghost"
								className="flex min-w-[84px] w-full sm:w-auto items-center justify-center rounded-lg h-12 px-10 text-gray-600 dark:text-gray-400 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700"
							>
								Back
							</Button>
							<Button
								onClick={handleContinue}
								disabled={!format}
								className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-10 bg-calm-blue text-white text-base font-bold leading-normal tracking-[0.015em] transition-opacity duration-300 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:dark:bg-gray-700 disabled:text-gray-500 disabled:dark:text-gray-400 hover:bg-calm-blue/90"
							>
								<span className="truncate">Continue</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
