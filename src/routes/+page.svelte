<script>
	// @ts-nocheck

	import {
		LINKEDIN_URL,
		GITHUB_URL,
		TWITTER_URL,
		PORTFOLIO_URL,
		INSTAGRAM_URL
		// @ts-ignore
	} from '$lib/components/config.ts';

	function source() {
		window.open('google.com'); // Add the link to the source code
	}
</script>

<div class="min-h-screen bg-bg-100 px-4 py-8 md:p-8">
	<div class="grid justify-items-center max-w-lg mx-auto">
		<img
			src="/profile.jpg"
			alt="Myphoto"
			class="w-48 h-48 rounded-full mb-10 p-1 border-4 border-primary-200 object-cover"
		/>
		<h1 class="text-3xl font-semibold text-center mb-8 text-text-100">
			I'm Mauricio Moraga,<br /> a <span class="text-accent-200">Computer Science Engineer</span>
			from Chile
		</h1>
		<div
			class="border border-bg-300 bg-bg-200 rounded-[20px] px-5 py-8 sm:p-8 w-full flex items-center justify-center"
		>
			<p class="text-center text-text-200">
				I'm a Computer Science Engineer with a combined 1 year of internship and job <span
					class="text-accent-100">experience in software development and project management.</span
				> My passion lies in turning imaginative concepts into tangible software solutions, and I have
				a proven track record of contributing to various projects for companies and institutions.
			</p>
		</div>
		<!-- linea separadora -->
		<div class="w-full h-0.5 bg-bg-300 my-8 mb-8"></div>

		<div class="grid gap-6 w-full">
			<h2 class="text-xl font-semibold">My links</h2>

			<!-- linkedin -->
			<div
				class="border border-bg-300 bg-bg-200 rounded-[20px] px-5 py-8 sm:p-8 w-full transition duration-200 hover:shadow-sm"
			>
				<div class="flex items-center">
					<img src="/linkedin.svg" alt="Linkedin" class="w-12 h-12 mr-4 shrink-0" />
					<div>
						<h2 class="text-text-100">Linkedin</h2>
						<p class="text-sm text-text-200">@mm0raga</p>
					</div>
					<div
						class="
                        flex items-center
                        bg-primary-100
                        rounded-full
                        p-2
                        cursor-pointer
                        hover:bg-primary-200
                        transition
                        duration-200
                        ml-auto
                        "
						on:click={() => window.open(LINKEDIN_URL, '_blank')}
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								window.open(LINKEDIN_URL, '_blank');
							}
						}}
						tabindex="0"
						role="button"
					>
						<img src="/link.svg" alt="Link icon" class="w-7 h-7" />
					</div>
				</div>
			</div>

			<!-- github -->
			<div
				class="border border-bg-300 bg-bg-200 rounded-[20px] px-5 py-8 sm:p-8 w-full transition duration-200 hover:shadow-sm"
			>
				<div class="flex items-center">
					<img src="/git.svg" alt="Github" class="w-12 h-12 mr-4 shrink-0" />
					<div>
						<h2 class="text-text-100">Github</h2>
						<p class="text-sm text-text-200">@mmogaP</p>
					</div>
					<div
						class="
                        flex items-center
                        bg-primary-100
                        rounded-full
                        p-2
                        cursor-pointer
                        hover:bg-primary-200
                        transition
                        duration-200
                        ml-auto
                        "
						on:click={() => window.open(GITHUB_URL, '_blank')}
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								window.open(GITHUB_URL, '_blank');
							}
						}}
						tabindex="0"
						role="button"
					>
						<img src="/link.svg" alt="Link icon" class="w-7 h-7" />
					</div>
				</div>
			</div>

			<!-- twitter -->
			<div
				class="border border-bg-300 bg-bg-200 rounded-[20px] px-5 py-8 sm:p-8 w-full transition duration-200 hover:shadow-sm"
			>
				<div class="flex items-center">
					<img src="/twitter.svg" alt="Linkedin" class="w-12 h-12 mr-4 bg-black rounded-xl" />
					<div>
						<h2 class="text-text-100">Twitter</h2>
						<p class="text-sm text-text-200">@mmoraga_</p>
					</div>
					<div
						class="
                        flex items-center
                        bg-primary-100
                        rounded-full
                        p-2
                        cursor-pointer
                        hover:bg-primary-200
                        transition
                        duration-200
                        ml-auto
                        "
						on:click={() => window.open(TWITTER_URL, '_blank')}
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								window.open(TWITTER_URL, '_blank');
							}
						}}
						tabindex="0"
						role="button"
					>
						<img src="/link.svg" alt="Link icon" class="w-7 h-7" />
					</div>
				</div>
			</div>

			<!-- Instagram -->
			<div
				class="border border-bg-300 bg-bg-200 rounded-[20px] px-5 py-8 sm:p-8 w-full transition duration-200 hover:shadow-sm"
			>
				<div class="flex items-center">
					<img src="/insta.svg" alt="Instagram" class="w-12 h-12 mr-4 shrink-0" />
					<div>
						<h2 class="text-text-100">Instagram</h2>
						<p class="text-sm text-text-200">@tech_mmoraga</p>
					</div>
					<div
						class="
                        flex items-center
                        bg-primary-100
                        rounded-full
                        p-2
                        cursor-pointer
                        hover:bg-primary-200
                        transition
                        duration-200
                        ml-auto
                        "
						on:click={() => window.open(INSTAGRAM_URL, '_blank')}
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								window.open(INSTAGRAM_URL, '_blank');
							}
						}}
						tabindex="0"
						role="button"
					>
						<img src="/link.svg" alt="Link icon" class="w-7 h-7" />
					</div>
				</div>
			</div>

			<!-- Portfolio -->
			<div
				class="border border-bg-300 bg-bg-200 rounded-[20px] px-5 py-8 sm:p-8 w-full transition duration-200 hover:shadow-sm"
			>
				<div class="flex items-center">
					<img src="/portfolio.svg" alt="Portfolio" class="w-12 h-12 mr-4 shrink-0" />
					<div>
						<h2 class="text-text-100">Portfolio</h2>
						<p class="text-sm text-text-200">My portfolio and skills.</p>
					</div>
					<div
						class="
                        flex items-center
                        bg-primary-100
                        rounded-full
                        p-2
                        cursor-pointer
                        hover:bg-primary-200
                        transition
                        duration-200
                        ml-auto
                        "
						on:click={() => window.open(PORTFOLIO_URL, '_blank')}
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								window.open(PORTFOLIO_URL, '_blank');
							}
						}}
						tabindex="0"
						role="button"
					>
						<img src="/link.svg" alt="Link icon" class="w-7 h-7" />
					</div>
				</div>
			</div>
		</div>

		<!-- linea separadora -->
		<div class="w-full h-0.5 bg-bg-300 my-8 mb-8"></div>

		<p class="text-text-100">Made by me with Svelte + TailwindCSS.</p>
		<div class="flex flex-col place-items-center mt-2">
			<a href="https://github.com/mmogaP/moragadev.me">
				<img src="/code.svg" alt="Svelte" class="w-8 h-8 cursor-pointer" />
			</a>
			<p class="text-accent-100">(source code)</p>
		</div>
	</div>
</div>
