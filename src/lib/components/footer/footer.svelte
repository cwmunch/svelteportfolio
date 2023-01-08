<script>
	import '../navbar/navbar.css';
</script>

<div class="divider" />
<footer
	class="flex justify-between max-w-screen-2xl mx-auto px-10 pb-5 footer bg-nutural text-primary-content footer-center"
>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href="https://www.linkedin.com/in/christianmunch1/" target="_blank" rel="noreferrer">
				<button
					id="Linkedin"
					class="bg-nutural sticky duration-500 border border-gray-600 hover:border-transparent fixed  w-12 transform h-12 text-2xl rounded-lg hover:bg-skin-btnHover hover:text-skin-Muted text-gray-400"
				>
					<i class="fab fa-linkedin" />
				</button>
			</a>

			<a href="https://github.com/cwmunch" target="_blank" rel="noreferrer">
				<button
					id="GitHub"
					class="bg-nutural sticky duration-500 border border-gray-600 hover:border-transparent fixed  w-12 transform h-12 text-2xl rounded-lg hover:bg-skin-btnHover hover:text-skin-Muted text-gray-400"
				>
					<i class="fab fa-github" />
				</button>
			</a>

			<a href="https://twitter.com/CwmMunch" target="_blank" rel="noreferrer">
				<button
					id="Twitter"
					class="bg-nutural sticky duration-500 border border-gray-600 hover:border-transparent fixed  w-12 transform h-12 text-2xl rounded-lg hover:bg-skin-btnHover hover:text-skin-Muted text-gray-400"
				>
					<i class="fab fa-twitter" />
				</button>
			</a>
		</div>
	</div>
	<div>
		<p class="text-gray-400">
			Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved by CW Munch
		</p>
	</div>
</footer>
