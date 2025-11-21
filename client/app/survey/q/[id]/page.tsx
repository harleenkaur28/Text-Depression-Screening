"use client";

import * as React from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { questions } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function QuestionPage() {
	const params = useParams();
	const router = useRouter();
	const searchParams = useSearchParams();
	const format = searchParams.get("format") || "mcq";
	const id = Number(params.id);
	const question = questions.find((q) => q.id === id);

	const [selectedOption, setSelectedOption] = React.useState<string>("");
	const [textAnswer, setTextAnswer] = React.useState<string>("");

	if (!question) {
		return <div>Question not found</div>;
	}

	const isLastQuestion = id === questions.length;
	const progress = (id / questions.length) * 100;

	const handleNext = () => {
		if (isLastQuestion) {
			router.push("/survey/feedback");
		} else {
			router.push(`/survey/q/${id + 1}?format=${format}`);
		}
	};

	const handlePrevious = () => {
		if (id === 1) {
			router.push("/survey/choose-format");
		} else {
			router.push(`/survey/q/${id - 1}?format=${format}`);
		}
	};

	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#f6f7f8] dark:bg-[#101922] font-sans text-slate-800 dark:text-slate-200">
			<main className="w-full max-w-2xl">
				<div className="flex flex-col rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/50 dark:bg-[#101922] shadow-sm">
					{/* Progress Bar */}
					<div className="p-6 md:p-8 border-b border-slate-200/80 dark:border-slate-800/50">
						<div className="flex flex-col gap-3">
							<div className="flex gap-6 justify-between">
								<p className="text-sm font-medium leading-normal text-slate-600 dark:text-slate-400">
									Question {id} of {questions.length}
								</p>
							</div>
							<div className="rounded-full bg-slate-200 dark:bg-slate-700 h-2">
								<div
									className="h-2 rounded-full bg-[#137fec]"
									style={{ width: `${progress}%` }}
								></div>
							</div>
						</div>
					</div>
					<div className="p-6 md:p-8">
						{/* Headline Text */}
						<h1 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white pb-6">
							{format === "text"
								? `In your own words, please describe how often you've been bothered by: ${question.text.replace(
										"Over the last 2 weeks, how often have you been bothered by ",
										""
								  )}`
								: question.text}
						</h1>
						{/* Input Area */}
						{format === "mcq" && question.options ? (
							<RadioGroup
								className="flex flex-col gap-3"
								value={selectedOption}
								onValueChange={setSelectedOption}
							>
								{question.options.map((option, index) => (
									<Label
										key={index}
										className={`flex cursor-pointer items-start gap-4 rounded-lg border border-solid p-4 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
											selectedOption === option
												? "border-[#137fec] bg-[#137fec]/10 dark:bg-[#137fec]/20"
												: "border-slate-200 dark:border-slate-700"
										}`}
									>
										<RadioGroupItem
											value={option}
											id={`option-${index}`}
											className="text-[#137fec] border-slate-300 dark:border-slate-600 mt-1"
										/>
										<div className="flex grow flex-col">
											<p className="text-base font-medium leading-normal text-slate-800 dark:text-slate-200">
												{option}
											</p>
										</div>
									</Label>
								))}
							</RadioGroup>
						) : (
							<div className="flex w-full flex-wrap items-end gap-4">
								<Label className="flex flex-col min-w-40 flex-1">
									<Textarea
										autoFocus
										className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-[#101922] focus-visible:border-[#137fec] focus-visible:ring-[#137fec]/20 min-h-36 placeholder:text-[#617589] dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
										placeholder="Type your answer here..."
										value={textAnswer}
										onChange={(e) => setTextAnswer(e.target.value)}
									/>
								</Label>
								<p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-normal pb-3 pt-1 w-full">
									Please provide a short, descriptive answer (1-3 sentences).
								</p>
							</div>
						)}
					</div>
					{/* Button Group */}
					<div className="flex justify-stretch border-t border-slate-200/80 dark:border-slate-800/50">
						<div className="flex flex-1 flex-wrap gap-3 p-4 justify-between">
							<Button
								onClick={handlePrevious}
								variant="ghost"
								className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-slate-200 text-slate-500 text-base font-bold leading-normal tracking-[0.015em] dark:bg-slate-700 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600"
							>
								<span className="truncate">Previous</span>
							</Button>
							<Button
								onClick={handleNext}
								className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#137fec] text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#137fec]/90"
							>
								<span className="truncate">Next</span>
							</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
