import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from 'public/sairdy.JPG'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Sai Shekar</title>
        <meta
          name="description"
          content="I'm Sai Shekar. A leader, and software engineer in India, Hyderabad."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            👋  I&apos;m Sai Shekar. A leader,  and software enthusiast in
              India.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              Ambitious and skilled graduating student in Bachelor of Technology with <b>Computer Science with AI & ML</b>. Passionate about software engineering with a proven track record of <b>building dynamic and responsive websites.</b> Demonstrated ability to develop parallel processing applications and integrate <b>DevOps practices</b>, showcasing a proactive approach to problem-solving. An entrepreneurial spirit evidenced by the successful launch of SaaS products and the creation of <b>open-source projects.</b> Quick learner with a talent for rapidly acquiring new skills and thriving in challenging environments. Eager to apply academic knowledge and personal project experience to contribute effectively in a professional setting
              </p>
              <p>
                <b>Fluent</b> in English, Telugu, <b>intermediate in Hindi.</b>

              </p>

              <p>
                <b>Currently Learning:</b>
              </p>
              <p>Web3[selenium,Blockchain] & Gen-Ai</p>

              <p><b>
                Areas of Expertise:

                </b>

              </p>
              <p>
              Software Engineering, Full Stack Development, Frontend Development, Web Development, DevOps
              </p>
              <p>
                <b>Industry Experience:</b>
              </p>
              <p>
              Software as a Service (SaaS) Projects, Certifications, Information Technology, hackathons </p>
              <p>
              Feel free to reach out to me.  


              </p>
              <p>
              Have a great day! 
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                href="https://github.com/Saishekar17"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/sai-shekar-dev/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="saishekardev@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                saishekardev@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
