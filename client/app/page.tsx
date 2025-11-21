import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-sans">
			{/* Navigation */}
			<header className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
				<div className="flex items-center gap-3">
					<div className="relative w-20 h-20">
						<Image
							src="/logo.png"
							alt="MindfulAI Logo"
							fill
							className="object-contain"
						/>
					</div>
					<span className="text-xl font-bold text-neutral-dark-gray dark:text-neutral-off-white">
						MindfulAI
					</span>
				</div>
				<div className="flex gap-4">
					<Link href="/login">
						<Button
							variant="ghost"
							className="text-neutral-dark-gray dark:text-neutral-off-white hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							Log In
						</Button>
					</Link>
					<Link href="/signup">
						<Button className="bg-calm-blue hover:bg-calm-blue/90 text-white">
							Sign Up
						</Button>
					</Link>
				</div>
			</header>

			{/* Hero Section */}
			<main className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto gap-8 pb-20">
				<div className="space-y-6">
					<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-dark-gray dark:text-neutral-off-white leading-tight">
						Understanding Your <br />
						<span className="text-calm-blue">Mental Well-being</span>
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
						A safe, anonymous space for students to track their mental health
						journey. Gain insights, find support, and take the first step
						towards a healthier mind.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 mt-4">
					<Link href="/survey/choose-format">
						<Button
							size="lg"
							className="h-14 px-8 text-lg bg-calm-blue hover:bg-calm-blue/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
						>
							Start Assessment
						</Button>
					</Link>
					<Link href="/about">
						<Button
							variant="outline"
							size="lg"
							className="h-14 px-8 text-lg border-gray-300 dark:border-gray-600 text-neutral-dark-gray dark:text-neutral-off-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full"
						>
							Learn More
						</Button>
					</Link>
				</div>

				{/* Simple Feature Highlights */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full text-left">
					{[
						{
							title: "Anonymous",
							desc: "Your privacy is our priority. All data is encrypted and anonymous.",
						},
						{
							title: "Insightful",
							desc: "Get immediate, AI-driven insights based on your responses.",
						},
						{
							title: "Supportive",
							desc: "Access resources and guidance tailored to your needs.",
						},
					].map((feature, i) => (
						<div
							key={i}
							className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm"
						>
							<h3 className="text-lg font-semibold text-neutral-dark-gray dark:text-neutral-off-white mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-500 dark:text-gray-400">{feature.desc}</p>
						</div>
					))}
				</div>
			</main>

			{/* Footer */}
			<footer className="py-8 text-center text-sm text-gray-400 dark:text-gray-500">
				<p>© {new Date().getFullYear()} MindfulAI. All rights reserved.</p>
			</footer>
		</div>
	);
}
