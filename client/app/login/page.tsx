import Link from "next/link";
import { Eye, EyeOff, Flower } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
	return (
		<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-sans">
			<div className="layout-container flex h-full grow flex-col">
				<div className="flex flex-1 justify-center items-stretch">
					<div className="layout-content-container flex flex-col flex-1">
						<div className="flex w-full grow bg-background-light dark:bg-background-dark items-stretch">
							<div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
								{/* Left Column: Image */}
								<div
									className="hidden lg:flex w-full h-full bg-center bg-no-repeat bg-cover aspect-auto"
									style={{
										backgroundImage:
											'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDn-Y7FB1MFpsqOBxdW9TP7Hyvh8asSSKjx3XnfelIno1Y-uiWMYeuJgz5jONoO0We-Z2jpFlqyWWHgUWtWq3PqtnOhoDwdRHOW-OI9ZAJGcKzBLY2wahyVH2m_50fnprKMeT-jvss2unEXGJWDeHLzVGoJYwgAI740wUk5dMPF-4WuuaQXBVQ-iVss3_g9sLHor30wYqORtRChRiok9-B8JKhS1B4-sb4Slcw1x8dsWfWGPGzfR_xloGXHhfT85UKuvrWkPfqITMjM")',
									}}
								></div>
								{/* Right Column: Form */}
								<div className="w-full h-full flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-off-white dark:bg-background-dark">
									<div className="max-w-md w-full space-y-8">
										<div>
											{/* Logo */}
											<div className="flex justify-center items-center gap-3 mb-6">
												<Flower className="w-10 h-10 text-calm-blue" />
												<span className="text-2xl font-bold text-neutral-dark-gray dark:text-neutral-off-white">
													MindWell
												</span>
											</div>
											<h1 className="text-neutral-dark-gray dark:text-neutral-off-white tracking-tight text-3xl font-bold leading-tight text-center">
												Welcome Back
											</h1>
											<p className="text-neutral-dark-gray dark:text-gray-300 text-base font-normal leading-normal mt-2 text-center">
												Your space for reflection and support.
											</p>
										</div>
										<form className="mt-8 space-y-6">
											<div className="space-y-4">
												<div className="flex flex-col gap-2">
													<Label
														htmlFor="email"
														className="text-neutral-dark-gray dark:text-gray-300 text-base font-medium leading-normal"
													>
														Email
													</Label>
													<Input
														id="email"
														name="email"
														type="email"
														autoComplete="email"
														required
														placeholder="you@university.edu"
														className="h-14 bg-white dark:bg-gray-800 border-[#dbe0e6] dark:border-gray-600 text-neutral-dark-gray dark:text-white focus-visible:ring-calm-blue/50 focus-visible:border-calm-blue text-base"
													/>
												</div>
												<div className="flex flex-col gap-2">
													<Label
														htmlFor="password"
														className="text-neutral-dark-gray dark:text-gray-300 text-base font-medium leading-normal"
													>
														Password
													</Label>
													<div className="relative">
														<Input
															id="password"
															name="password"
															type="password"
															autoComplete="current-password"
															required
															placeholder="Enter your password"
															className="h-14 bg-white dark:bg-gray-800 border-[#dbe0e6] dark:border-gray-600 text-neutral-dark-gray dark:text-white focus-visible:ring-calm-blue/50 focus-visible:border-calm-blue text-base pr-12"
														/>
														<button
															type="button"
															className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#617589] hover:text-calm-blue"
														>
															<EyeOff className="w-5 h-5" />
														</button>
													</div>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="flex items-center space-x-2">
													<Checkbox
														id="remember-me"
														className="border-gray-300 text-calm-blue focus:ring-calm-blue"
													/>
													<Label
														htmlFor="remember-me"
														className="text-sm text-neutral-dark-gray dark:text-gray-300 font-normal"
													>
														Remember me
													</Label>
												</div>
												<div className="text-sm">
													<Link
														href="/forgot-password"
														className="font-medium text-calm-blue hover:text-calm-blue/80"
													>
														Forgot Password?
													</Link>
												</div>
											</div>
											<div>
												<Button
													type="submit"
													className="w-full py-6 text-base font-medium bg-calm-blue hover:bg-calm-blue/90 text-white rounded-lg"
												>
													Log In
												</Button>
											</div>
										</form>
										<div className="text-center text-sm text-neutral-dark-gray dark:text-gray-400">
											<p>
												Don&apos;t have an account?{" "}
												<Link
													href="/signup"
													className="font-medium text-muted-teal hover:text-muted-teal/80"
												>
													Sign Up
												</Link>
											</p>
										</div>
										<div className="border-t border-gray-200 dark:border-gray-700 pt-6">
											<p className="text-center text-xs text-gray-500 dark:text-gray-400">
												<Link href="#" className="hover:underline">
													Privacy Policy
												</Link>{" "}
												·{" "}
												<Link href="#" className="hover:underline">
													Support
												</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
