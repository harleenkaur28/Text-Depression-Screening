import Link from "next/link";
import Image from "next/image";
import { Users, Flower, GraduationCap, Info, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeedbackPage() {
	return (
		<div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-sans">
			{/* TopNavBar Component */}
			<header className="sticky top-0 z-10 flex items-center justify-center w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
				<div className="flex items-center justify-between w-full max-w-6xl px-4 py-3">
					<div className="flex items-center gap-3 text-slate-900 dark:text-white">
						<div className="size-20 relative">
							<Image
								src="/logo.png"
								alt="MindfulAI Logo"
								fill
								className="object-contain"
							/>
						</div>
						<h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
							MindfulAI
						</h2>
					</div>
					<div className="hidden md:flex items-center gap-8">
						<Link
							href="#"
							className="text-slate-700 dark:text-slate-300 hover:text-calm-blue dark:hover:text-calm-blue text-sm font-medium leading-normal transition-colors"
						>
							Dashboard
						</Link>
						<Link
							href="#"
							className="text-slate-700 dark:text-slate-300 hover:text-calm-blue dark:hover:text-calm-blue text-sm font-medium leading-normal transition-colors"
						>
							My Surveys
						</Link>
						<Link
							href="#"
							className="text-slate-700 dark:text-slate-300 hover:text-calm-blue dark:hover:text-calm-blue text-sm font-medium leading-normal transition-colors"
						>
							Resources
						</Link>
					</div>
					<div className="flex items-center gap-4">
						<Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-calm-blue text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-calm-blue/90 transition-colors">
							<span className="truncate">Log Out</span>
						</Button>
						<div
							className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
							style={{
								backgroundImage:
									'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbZ8Xw5R8RlS-5eFotnlL-uST2PTRdwxNo3ZIblxPTwA09Cz5vFxOikiGb0oD9uj6qSGxcyXLYXPLkOBuIo-kAKgli7qbTFBQI2IXtALSblMhzaWXSDjI43vK8MjcNuEr5cWZnbX8T_yHkeJBMbP7OxbLEjDIRM4rzINlyE-hYd_66zBMW658NWMfNczZWBcvXaVm96zjeThAqR1FL7Sqmglluf7dXToZ5g0MPdpXnuZ1BbZz_OzfhYA8fQpHoJhTjdj1PdcI4PTUq")',
							}}
						></div>
					</div>
				</div>
			</header>
			<main className="flex flex-1 justify-center py-10 px-4">
				<div className="flex flex-col w-full max-w-4xl gap-8">
					{/* PageHeading Component */}
					<div className="flex flex-wrap justify-between gap-4">
						<div className="flex flex-col gap-2">
							<p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
								Thank you, Alex
							</p>
							<p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal max-w-2xl">
								We appreciate you taking the time to reflect on your well-being.
								Your self-awareness is an important step in navigating your
								journey.
							</p>
						</div>
					</div>
					{/* Card Component */}
					<div className="p-0 @container">
						<div className="flex flex-col items-stretch justify-start rounded-xl md:flex-row md:items-start bg-slate-100 dark:bg-slate-800/50">
							<div
								className="w-full md:w-2/5 bg-center bg-no-repeat aspect-video md:aspect-auto md:h-full bg-cover rounded-t-xl md:rounded-l-xl md:rounded-r-none min-h-[200px]"
								style={{
									backgroundImage:
										'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAr90aCyRVBYb1QYQ9XjfHkfQYrJqP1jcIUvIiv3q_Xn7Yw3rKtj5K-wzJLAg3_1i-rcnfqkyr6PvvZAKAngxRFqOJ9XSCJR-vjUYL4sFlB7gE9N9btenoZrHrA4f9ra88XXJDAMuEFua6r_n1luAhuIfUpWS5O-UvCCPQuILxmBsbUDW1-zhG7kKrv_lFbPTH_UOkyw6tCPUxkBPVEMkpov72juaOPRCDTBNIRwDb619Ajxvk8DEVj6qHeTN5tPfvn00u_qPRgo2_Z")',
								}}
							></div>
							<div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-6">
								<p className="text-calm-blue text-sm font-medium leading-normal">
									Your Summary
								</p>
								<p className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
									Navigating the Pressures of Student Life
								</p>
								<p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal mt-1">
									Your responses suggest you&apos;re balancing many of the
									common opportunities and challenges that come with university
									life. It&apos;s great that you&apos;re taking a moment to
									check in with yourself and be mindful of your needs.
								</p>
							</div>
						</div>
					</div>
					{/* SectionHeader Component */}
					<h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] pt-4">
						A Few Reflections
					</h2>
					{/* ImageGrid Component */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="flex flex-col gap-4 rounded-xl p-6 bg-slate-100 dark:bg-slate-800/50">
							<div className="flex items-center gap-3">
								<div className="flex items-center justify-center size-10 rounded-full bg-calm-blue/20 text-calm-blue">
									<Users className="w-6 h-6" />
								</div>
								<p className="text-slate-900 dark:text-white text-lg font-bold leading-normal">
									Social Connections
								</p>
							</div>
							<p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
								Making time for friends and community can be a wonderful source
								of support and energy during busy times.
							</p>
						</div>
						<div className="flex flex-col gap-4 rounded-xl p-6 bg-slate-100 dark:bg-slate-800/50">
							<div className="flex items-center gap-3">
								<div className="flex items-center justify-center size-10 rounded-full bg-calm-blue/20 text-calm-blue">
									<Flower className="w-6 h-6" />
								</div>
								<p className="text-slate-900 dark:text-white text-lg font-bold leading-normal">
									Stress Management
								</p>
							</div>
							<p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
								Finding small moments to pause and breathe can make a big
								difference in how you handle daily stressors.
							</p>
						</div>
						<div className="flex flex-col gap-4 rounded-xl p-6 bg-slate-100 dark:bg-slate-800/50">
							<div className="flex items-center gap-3">
								<div className="flex items-center justify-center size-10 rounded-full bg-calm-blue/20 text-calm-blue">
									<GraduationCap className="w-6 h-6" />
								</div>
								<p className="text-slate-900 dark:text-white text-lg font-bold leading-normal">
									Academic Balance
								</p>
							</div>
							<p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
								Juggling coursework and personal time is a key part of the
								student experience. Remember to be kind to yourself.
							</p>
						</div>
					</div>
					{/* Disclaimer Box */}
					<div className="flex items-start gap-4 p-4 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
						<Info className="text-slate-600 dark:text-slate-400 mt-1 w-6 h-6" />
						<div className="flex flex-col gap-1">
							<h3 className="text-slate-900 dark:text-white font-bold">
								Important: This is not a diagnosis.
							</h3>
							<p className="text-slate-600 dark:text-slate-400 text-sm">
								These insights are based on your survey responses to help you
								reflect. If you have concerns, we strongly encourage you to
								connect with a mental health professional.
							</p>
						</div>
					</div>
					{/* Resource Section */}
					<div className="flex flex-col md:flex-row gap-8 pt-6">
						<div className="flex-1 flex flex-col gap-3">
							<h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
								Next Steps &amp; Support
							</h2>
							<p className="text-slate-600 dark:text-slate-400">
								If you&apos;d like to talk to someone or explore more resources,
								here are a few places to start. You are not alone.
							</p>
							<div className="mt-4">
								<Button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-6 bg-calm-blue text-white text-base font-bold leading-normal hover:bg-calm-blue/90 transition-colors">
									<ExternalLink className="w-5 h-5" />
									<span className="truncate">Find Support Resources</span>
								</Button>
							</div>
						</div>
						<div className="flex-1 flex flex-col gap-4">
							<Link href="#" className="group">
								<p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-calm-blue dark:group-hover:text-calm-blue transition-colors">
									University Counseling Center
								</p>
								<p className="text-sm text-slate-600 dark:text-slate-400">
									Confidential support and counseling services for students.
								</p>
							</Link>
							<div className="h-px bg-slate-200 dark:bg-slate-800"></div>
							<Link href="#" className="group">
								<p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-calm-blue dark:group-hover:text-calm-blue transition-colors">
									National Crisis &amp; Suicide Lifeline
								</p>
								<p className="text-sm text-slate-600 dark:text-slate-400">
									24/7, free and confidential support. Just dial or text 988.
								</p>
							</Link>
							<div className="h-px bg-slate-200 dark:bg-slate-800"></div>
							<Link href="#" className="group">
								<p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-calm-blue dark:group-hover:text-calm-blue transition-colors">
									Tips for Managing Student Stress
								</p>
								<p className="text-sm text-slate-600 dark:text-slate-400">
									Helpful articles and guides for navigating academic and
									personal challenges.
								</p>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
