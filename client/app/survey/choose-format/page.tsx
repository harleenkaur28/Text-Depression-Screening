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

	const handleContinue = () => {
		if (format) {
			router.push(`/survey/welcome?format=${format}`);
		}
	};

	return (
		<div className="relative flex h-auto min-h-screen w-full flex-col bg-[#E0F2F1] dark:bg-[#101922] font-sans text-[#333333] dark:text-[#E0F2F1]">
			<div className="layout-container flex h-full grow flex-col">
				<div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
					<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
						<div className="flex flex-col gap-3 p-4">
							<div className="flex gap-6 justify-between">
								<p className="text-[#333333] dark:text-[#E0F2F1] text-base font-medium leading-normal">
									Student Wellness Survey
								</p>
							</div>
							<div className="rounded-full bg-[#CCCCCC] dark:bg-[#455A64] h-2">
								<div
									className="h-2 rounded-full bg-[#00796B]"
									style={{ width: "33%" }}
								></div>
							</div>
							<p className="text-[#555555] dark:text-[#B0BEC5] text-sm font-normal leading-normal">
								Step 1 of 3: Choose Your Format
							</p>
						</div>
						<h1 className="text-[#333333] dark:text-[#E0F2F1] tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-12">
							Choose how you&apos;d like to respond.
						</h1>
						<p className="text-[#555555] dark:text-[#B0BEC5] text-base font-normal leading-normal pb-8 pt-1 px-4 text-center">
							Select the format that feels most comfortable for you.
						</p>
						<RadioGroup
							className="flex flex-col gap-4 p-4"
							value={format || ""}
							onValueChange={(value) => setFormat(value as "mcq" | "text")}
						>
							<Label
								className={`flex items-center gap-4 rounded-xl border-2 border-solid p-6 cursor-pointer bg-white dark:bg-[#1A2835] transition-all duration-200 ease-in-out ${
									format === "mcq"
										? "border-[#00796B] bg-[#00796B]/10 dark:bg-[#00796B]/20"
										: "border-[#CCCCCC] dark:border-[#455A64]"
								}`}
							>
								<List className="w-8 h-8 text-[#00796B]" />
								<div className="flex grow flex-col">
									<p className="text-[#333333] dark:text-[#E0F2F1] text-base font-medium leading-normal">
										Multiple Choice Questions
									</p>
									<p className="text-[#555555] dark:text-[#B0BEC5] text-sm font-normal leading-normal mt-1">
										Answer each question by selecting from a predefined list of
										options. This is the standard and quickest method.
									</p>
								</div>
								<RadioGroupItem
									value="mcq"
									id="format-mcq"
									className="text-[#00796B] border-[#CCCCCC] dark:border-[#455A64]"
								/>
							</Label>
							<Label
								className={`flex items-center gap-4 rounded-xl border-2 border-solid p-6 cursor-pointer bg-white dark:bg-[#1A2835] transition-all duration-200 ease-in-out ${
									format === "text"
										? "border-[#00796B] bg-[#00796B]/10 dark:bg-[#00796B]/20"
										: "border-[#CCCCCC] dark:border-[#455A64]"
								}`}
							>
								<Keyboard className="w-8 h-8 text-[#00796B]" />
								<div className="flex grow flex-col">
									<p className="text-[#333333] dark:text-[#E0F2F1] text-base font-medium leading-normal">
										Text Input Responses
									</p>
									<p className="text-[#555555] dark:text-[#B0BEC5] text-sm font-normal leading-normal mt-1">
										Describe your feelings in your own words. Your text will be
										analyzed to determine the most fitting response.
									</p>
								</div>
								<RadioGroupItem
									value="text"
									id="format-text"
									className="text-[#00796B] border-[#CCCCCC] dark:border-[#455A64]"
								/>
							</Label>
						</RadioGroup>
						<div className="flex px-4 py-8 justify-center gap-4">
							<Button
								onClick={() => router.back()}
								variant="ghost"
								className="flex min-w-[84px] w-full sm:w-auto items-center justify-center rounded-lg h-12 px-10 text-[#555555] dark:text-[#B0BEC5] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#CCCCCC]/20 dark:hover:bg-[#37474F]/50"
							>
								Back
							</Button>
							<Button
								onClick={handleContinue}
								disabled={!format}
								className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-10 bg-[#00796B] text-white text-base font-bold leading-normal tracking-[0.015em] transition-opacity duration-300 disabled:cursor-not-allowed disabled:bg-[#CCCCCC] disabled:dark:bg-[#37474F] disabled:text-[#666666] disabled:dark:text-[#78909C] hover:bg-[#00796B]/90"
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
