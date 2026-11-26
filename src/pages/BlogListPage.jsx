import { Link } from "react-router-dom"
import SEOHead from "../components/SEOHead"
import { motion } from "framer-motion"
import { blogs } from "../data/blogs"
import { BsArrowRight, BsClock, BsTag } from "react-icons/bs"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
})

export default function BlogListPage() {
  // Sort newest-first for display, assign chronological number (01 = oldest)
  const sorted = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date))
  const chronoOrder = [...blogs].sort((a, b) => new Date(a.date) - new Date(b.date))
  const getNum = (slug) => String(chronoOrder.findIndex(b => b.slug === slug) + 1).padStart(2, "0")

  const [featured, ...rest] = sorted

  return (
    <div className="mt-28 mb-20 min-h-[60vh]">
      <SEOHead
        title="Blog | Nithyashree G V — Articles on AI, Data Science & Tech"
        description="Read articles and reflections on artificial intelligence, data analytics, and technology by Nithyashree G V."
        canonicalPath="/blog"
      />

      {/* Header */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-28 mb-10 lg:mb-16">
        <motion.div {...fadeUp()}>
          <span className="text-[10px] font-normal tracking-[0.2em] uppercase text-black/40 block mb-3">Thoughts & Articles</span>
          <h1 className="text-3xl lg:text-5xl font-medium text-black">
            Blog
          </h1>
          <p className="text-base lg:text-lg text-black/50 mt-4 max-w-xl font-light leading-relaxed">
            Articles and personal reflections on artificial intelligence, data science, and growing up alongside evolving technology.
          </p>
        </motion.div>
      </div>

      {/* Featured post (first blog) */}
      {featured && (
        <div className="px-5 sm:px-8 md:px-12 lg:px-28 mb-10 lg:mb-16">
          <motion.div {...fadeUp(0.1)}>
            <Link
              to={`/blog/${featured.slug}`}
              className="group block relative overflow-hidden rounded-2xl border border-black/8 p-5 sm:p-7 lg:p-10 transition-all duration-500 hover:shadow-xl hover:border-black/15 bg-white"
            >
              {/* Background number */}
              <div className="absolute -right-4 -top-6 text-[140px] sm:text-[180px] lg:text-[240px] font-bold text-black/[0.02] select-none leading-none pointer-events-none">
                {getNum(featured.slug)}
              </div>

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
                <div className="lg:max-w-[62%]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-widest uppercase font-medium bg-black text-white rounded-full">
                      <BsTag size={10} />
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-black/40 font-light">
                      <BsClock size={10} />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black leading-tight mb-3 transition-colors duration-300 group-hover:text-black/80">
                    {featured.title}
                  </h2>
                  <p className="text-black/50 text-sm lg:text-base leading-relaxed font-light mb-5 line-clamp-3">
                    {featured.summary}
                  </p>
                  <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-black/30">
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/[0.04] text-black/40">#{getNum(featured.slug)}</span>
                    {featured.date}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-5">
                  {featured.heroImage && (
                    <div className="w-full sm:w-64 lg:w-72 h-40 rounded-xl overflow-hidden border border-black/8 flex-shrink-0 shadow-sm">
                      <img
                        src={featured.heroImage}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <BsArrowRight size={18} />
                    </motion.div>
                    <span className="text-xs text-black/40 font-light">Read Article</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      )}

      {/* Rest of the posts as cards grid (if any) */}
      {rest.length > 0 && (
        <div className="px-5 sm:px-8 md:px-12 lg:px-28">
          <motion.div {...fadeUp(0.15)} className="mb-8">
            <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 font-normal">More Articles</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {rest.map((blog, idx) => (
              <motion.div key={blog.slug} {...fadeUp(0.2 + idx * 0.08)}>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="group block h-full rounded-2xl border border-black/8 p-5 lg:p-7 transition-all duration-500 hover:shadow-lg hover:border-black/15 hover:-translate-y-1 relative overflow-hidden bg-white"
                >
                  <div className="absolute -right-2 -bottom-4 text-[100px] font-bold text-black/[0.02] select-none leading-none pointer-events-none">
                    {getNum(blog.slug)}
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] tracking-widest uppercase font-normal border border-black/15 text-black/60 rounded-full">
                        {blog.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-black/35 font-light">
                        <BsClock size={9} />
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg lg:text-xl font-medium text-black mb-3 leading-snug transition-colors duration-300 group-hover:text-black/80">
                      {blog.title}
                    </h2>

                    <p className="text-black/45 text-sm leading-relaxed font-light mb-5 line-clamp-2">
                      {blog.summary}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-black/25">
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/[0.04] text-black/35">#{getNum(blog.slug)}</span>
                        {blog.date}
                      </span>
                      <span className="text-sm font-light text-black/40 group-hover:text-black flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5">
                        Read <BsArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter-style CTA */}
      <motion.div {...fadeUp(0.3)} className="px-5 sm:px-8 md:px-12 lg:px-28 mt-14 lg:mt-20">
        <div className="rounded-2xl border border-black/8 p-6 lg:p-10 text-center bg-black/[0.01]">
          <h3 className="text-lg lg:text-xl font-medium text-black mb-2">More articles coming soon</h3>
          <p className="text-sm text-black/40 font-light max-w-md mx-auto">
            I regularly write about artificial intelligence, data analytics, and my learning journey as a student and developer.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <a
              href="https://github.com/Nithyashreegopal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm border border-black/80 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-normal"
            >
              Follow on GitHub
            </a>
            <a
              href="https://linkedin.com/in/nithyashree-gv-42905b323"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 font-normal"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
