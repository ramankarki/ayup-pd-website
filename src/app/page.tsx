import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'
import Image from 'next/image'

export default function Home() {
	return (
		<div>
			{/* header */}
			<HeaderComponent />

			{/* landing section */}
			<div className='py-10 flex flex-col items-center' id='banner'>
				<picture>
					<Image src='/images/hero.png' alt='bot' width={567} height={349} />
				</picture>
				<p className='max-w-[550px] text-center'>
					Transform your workplace with AI-Solutions – innovative virtual
					assistants and prototyping services designed to revolutionize the
					digital employee experience.
				</p>
			</div>

			{/* services */}
			<div className='py-10 vertical-gap-40' id='services'>
				<h2>Our services</h2>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/service-1.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Chat-bot as a service</h3>
						<p>
							Chatbots are AI-driven conversational tools designed to interact
							with users in natural language, automating tasks like customer
							support, lead generation, and information retrieval. Chatbot as a
							Service (CaaS) offers businesses the capability to deploy tailored
							chatbots without needing in-house expertise in AI or development.
							These services often include customizable templates, natural
							language processing (NLP) capabilities, and integrations with
							platforms like websites, apps, or messaging services. With CaaS,
							businesses can enhance user engagement, streamline operations, and
							provide 24/7 support, all while saving time and reducing
							operational costs
						</p>
						<p className='column__cta'>Contact us to get started today!</p>
					</div>
				</div>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/service-2.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Prototyping as a service</h3>
						<p>
							Prototyping as a Service enables businesses and individuals to
							quickly transform their ideas into functional, interactive
							prototypes without the need for extensive resources or technical
							skills. This service includes access to tools and expertise to
							design wireframes, mockups, or working models that simulate the
							look and feel of the final product. PaaS allows for iterative
							testing and user feedback, ensuring that the end product aligns
							with user expectations and business goals. By leveraging PaaS,
							organizations can reduce development risks, shorten
							time-to-market, and foster innovation efficiently.
						</p>
						<p className='column__cta'>
							Let’s build your vision—contact us today!
						</p>
					</div>
				</div>
			</div>

			{/* past events */}
			<div className='py-10 vertical-gap-40' id='events'>
				<div>
					<h2>Past events</h2>
					<p className='text-center text-sm mt-4'>
						Uniting AI minds to explore advancements and applications.
					</p>
				</div>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/past-1.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Explore a Vibrant AI Community</h3>
						<p>
							Through our past events and workshops, we’ve fostered a dynamic
							hub of innovation and collaboration. By uniting AI enthusiasts,
							researchers, and professionals, we have built a community driven
							by a shared passion for unlocking the transformative potential of
							artificial intelligence.
						</p>
					</div>
				</div>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/past-2.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Delve into Cutting-Edge AI Applications</h3>
						<p>
							For those looking to advance their expertise, our Deep Learning
							Applications sessions center around hands-on projects. Covering
							areas like image recognition and natural language processing,
							these workshops guide participants in using neural networks to
							tackle real-world problems.
						</p>
					</div>
				</div>
				<div className='column'>
					<div className='column__left'>
						<picture>
							<Image
								src='/images/past-3.png'
								alt='service 1'
								width={550}
								height={306}
							/>
						</picture>
					</div>
					<div className='column__right'>
						<h3>Learn from Industry Leaders&apos; Expertise</h3>
						<p>
							A number of our workshops include guest speakers and panels
							featuring top AI professionals. These sessions offer priceless
							insights into cutting-edge technologies, industry developments,
							and the future of artificial intelligence.
						</p>
					</div>
				</div>
			</div>

			{/* customer feedback */}
			<div className='py-10' id='feedback'>
				<h2>Customers feedback</h2>
				<div className='column__right vertical-gap-40 mt-10 max-w-[550px] m-auto'>
					<div className='flex gap-4'>
						<picture className='grow-0 shrink-0'>
							<Image
								src='/images/avatar-1.png'
								alt='avatar 1'
								style={{ width: 120, height: 120 }}
								width={120}
								height={120}
							/>
						</picture>
						<div className='text-sm flex flex-col gap-2'>
							<p className='font-semibold'>
								Sarah Scaife, Product owner, BAXTA
							</p>
							<p>
								I’m a solo entrepreneur and not very good with tech. AI
								solutions made it easy, mentoring me through everything. Highly
								recommend!
							</p>
						</div>
					</div>
					<div className='flex gap-4'>
						<picture className='grow-0 shrink-0'>
							<Image
								src='/images/avatar-2.png'
								alt='avatar 1'
								style={{ width: 120, height: 120 }}
								width={120}
								height={120}
							/>
						</picture>
						<div className='text-sm flex flex-col gap-2'>
							<p className='font-semibold'>Blake Weston, Find Fill Storage</p>
							<p>
								We’re extremely impressed with AI solutions technical skill, and
								ability to adapt, iterate, and learn new skills.
							</p>
						</div>
					</div>
					<div className='flex gap-4'>
						<picture className='grow-0 shrink-0'>
							<Image
								src='/images/avatar-3.png'
								alt='avatar 1'
								style={{ width: 120, height: 120 }}
								width={120}
								height={120}
							/>
						</picture>
						<div className='text-sm flex flex-col gap-2'>
							<p className='font-semibold'>
								Anne Fields, Director, Care Careers
							</p>
							<p>
								Exceptional AI services that streamlined our processes and
								delivered impressive results!
							</p>
						</div>
					</div>
					<div className='flex gap-4'>
						<picture className='grow-0 shrink-0'>
							<Image
								src='/images/avatar-4.png'
								alt='avatar 1'
								style={{ width: 120, height: 120 }}
								width={120}
								height={120}
							/>
						</picture>
						<div className='text-sm flex flex-col gap-2'>
							<p className='font-semibold'>John doe, Developer, Cargo</p>
							<p>
								The AI services were innovative and effective, significantly
								improving our workflows and delivering great results.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* upcoming events */}
			<div className='py-10 flex flex-col items-center vertical-gap-40'>
				<h2>Upcoming events</h2>
				<div className='flex gap-10 px-4'>
					<picture>
						<Image
							src='/images/new-event-1.png'
							width={700}
							height={349}
							alt='event 1'
						/>
					</picture>
					<picture>
						<Image
							src='/images/new-event-2.png'
							width={700}
							height={349}
							alt='event 1'
						/>
					</picture>
				</div>
			</div>

			<FooterComponent />
		</div>
	)
}
