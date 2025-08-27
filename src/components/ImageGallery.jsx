import { useState, useEffect, useRef, use } from 'react'
import { motion, AnimatePresence, animate  } from 'framer-motion'
import gallery from '../data/gallery.json'
import ImageLoader from './ImageLoader'

function ImageGallery({ sectionKey }) {
    const [toggle, setToggle] = useState(false)
    const [loading, setLoading] = useState(false)
    const galleryRef = useRef(null)
    const prevToggle = useRef(toggle)

    const section = gallery[sectionKey]

    const previewImages = section.preview.map(file =>
        new URL(`../assets/${sectionKey}/${file}`, import.meta.url).href
    )

    const galleryImages = section.gallery.map(file =>
        new URL(`../assets/${sectionKey}/${file}`, import.meta.url).href
    )

    const imagesToShow = toggle ? galleryImages : previewImages

    useEffect(() => {

        if (toggle && prevToggle.current === false){
            setLoading(true)

            //wait till images are loaded
            let loaded = 0

            galleryImages.forEach(src => {
                const img = new Image()
                img.src = src
                img.onload = img.onerror = () => {
                loaded++
                if (loaded === galleryImages.length) {
                    setLoading(false)
                }
                }
            })
        }

        if (!toggle && prevToggle.current === true) {
            setLoading(false)
            const rect = galleryRef.current.getBoundingClientRect()
            const targetY = rect.top + window.scrollY - 300

            const controls = animate(window.scrollY, targetY, {
                duration: 0.5,
                ease: 'easeInOut',
                onUpdate: latest => {
                    window.scrollTo(0, latest)
                }
            })

            return () => controls.stop()
        }

        prevToggle.current = toggle
    }, [toggle])

    return (
        <div ref={galleryRef} className="gallery custom-cakes">
            <h3>{section.title}</h3>
            <p>{section.paragraph}</p>

            {loading ? 
                <ImageLoader />
                :
                <AnimatePresence initial={false}>
                    <motion.div
                        key={toggle ? 'full' : 'preview'}
                        initial={{ opacity: 0, height: 0, transition:{
                            height: { duration: 0.5, delay: 0.5 },
                            opacity: { duration: 0.5, delay: 1 }
                        }}}
                        animate={{ opacity: 1, height: 'auto'}}
                        exit={{ opacity: 0, height: 0, transition:{
                            height: { duration: 0.5, delay: 0.5 },
                            opacity: { duration: 0.5, delay: 0.5 }
                        }}} 
                        className={toggle ? 'gallery-full' : 'gallery-preview'}
                        style={toggle && { columnCount: section.columnNum }}
                        >
                        {imagesToShow.map((src, i) => (
                            <img
                            key={i}
                            src={src}
                            title="Click to open in a new page"
                            onClick={() => window.open(src, '_blank')}

                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            }
            {/*loading ?
                <AnimatePresence>
                    <motion.ImageLoader 
                        initial={{ opacity: 0, height: 0, transition:{
                            height: { duration: 0.5 },
                            opacity: { duration: 0.5, delay: 0.5 }
                        }}}
                        animate={{ opacity: 1, height: 'auto'}}
                        exit={{ opacity: 0, height: 0, transition:{
                            height: { duration: 0.5, delay: 0.5 },
                            opacity: { duration: 0.5 }
                        }}} 
                    />
                </AnimatePresence>
                :
                <AnimatePresence initial={false}>
                    {toggle ?
                        <motion.div className='gallery-full'
                            initial={{ opacity: 0, height: 0, transition:{
                            height: { duration: 0.5 },
                            opacity: { duration: 0.5, delay: 0.5 }
                            }}}
                            animate={{ opacity: 1, height: 'auto'}}
                            exit={{ opacity: 0, height: 0, transition:{
                                height: { duration: 0.5, delay: 0.5 },
                                opacity: { duration: 0.5 }
                            }}} 
                        >
                            {imagesToShow.map((src, i) => (
                                <img
                                key={i}
                                src={src}
                                title="Click to open in a new page"
                                onClick={() => window.open(src, '_blank')}

                                />
                            ))}
                        </motion.div>
                        :
                        <motion.div className='gallery-preview'
                            initial={{ opacity: 0, height: 0, transition:{
                            height: { duration: 0.5 },
                            opacity: { duration: 0.5, delay: 0.5 }
                            }}}
                            animate={{ opacity: 1, height: 'auto'}}
                            exit={{ opacity: 0, height: 0, transition:{
                                height: { duration: 0.5, delay: 0.5 },
                                opacity: { duration: 0.5 }
                            }}} 
                        >
                            {imagesToShow.map((src, i) => (
                                <img
                                key={i}
                                src={src}
                                title="Click to open in a new page"
                                onClick={() => window.open(src, '_blank')}

                                />
                            ))}
                        </motion.div>
                    }
                </AnimatePresence>
            */}

            <button className="basic-button" onClick={() => setToggle(x => !x)}>
                {toggle ? 'see less' : 'see more'}
            </button>
        </div>
    )
}

export default ImageGallery