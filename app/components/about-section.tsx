import Image from "next/image"
import { Code2, GraduationCap, Briefcase } from "lucide-react"

export function AboutSection() {
    return (
        <section id="about" className="relative px-6 py-24 lg:px-8 bg-muted/30 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient Orbs */}
                <div
                    className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-accent-dynamic/10 blur-3xl"
                    style={{
                        animation: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}
                ></div>
                <div
                    className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl"
                    style={{
                        animation: 'pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        animationDelay: '1s'
                    }}
                ></div>

                {/* Dot Pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(128, 128, 128, 0.05) 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                ></div>
            </div>

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="mb-4 text-center animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                    <p className="text-sm text-muted-foreground mb-2">Introduction</p>
                    <h2 className="text-4xl font-serif font-bold tracking-tight">About me</h2>
                    <div className="h-1 w-20 bg-accent-dynamic mx-auto rounded-full mt-4"></div>
                </div>

                <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                    {/* Profile Image */}
                    <div className="flex justify-center lg:justify-start animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                        <div className="relative w-full max-w-sm">
                            <div className="relative overflow-hidden rounded-3xl bg-muted shadow-2xl ring-1 ring-border/50">
                                <Image
                                    src="/About.png"
                                    alt="Profile photo"
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                    priority
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                            </div>
                            {/* Floating accent element */}
                            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-accent-dynamic/20 backdrop-blur-sm border border-accent-dynamic/30 -z-10"></div>
                            <div className="absolute -top-4 -left-4 h-32 w-32 rounded-2xl bg-accent-dynamic/10 backdrop-blur-sm border border-accent-dynamic/20 -z-10"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-muted-foreground animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                            I am an experienced Full-Stack Web Developer with 6 years of professional expertise, based in the Philippines. I specialize in building modern, responsive frontends and robust backend systems, delivering seamless and scalable web applications. Throughout my career, I have contributed to diverse projects, creating solutions that combine performance, usability, and reliability.
                        </p>

                        {/* Info Cards */}
                        <div className="grid gap-4 sm:grid-cols-3 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                            {/* Languages Card */}
                            <div className="group rounded-2xl border-2 border-accent-dynamic bg-accent-dynamic/5 backdrop-blur-sm p-6 space-y-3 transition-all hover:scale-105 hover:shadow-lg hover:border-accent-dynamic/80">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-dynamic/10 group-hover:bg-accent-dynamic/20 transition-colors">
                                    <Code2 className="h-6 w-6 text-accent-dynamic" />
                                </div>
                                <h3 className="font-semibold">Languages</h3>
                                <p className="text-sm text-muted-foreground">
                                    HTML & CSS, JavaScript, PHP, TypeScript, SQL
                                </p>
                            </div>

                            {/* Education Card */}
                            <div className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 space-y-3 transition-all hover:scale-105 hover:shadow-lg hover:border-accent-dynamic/50">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-dynamic/10 group-hover:bg-accent-dynamic/20 transition-colors">
                                    <GraduationCap className="h-6 w-6 text-accent-dynamic" />
                                </div>
                                <h3 className="font-semibold">Education</h3>
                                <p className="text-sm text-muted-foreground">Bachelor of Science in Information Technology</p>
                            </div>

                            {/* Projects Card */}
                            <div className="group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 space-y-3 transition-all hover:scale-105 hover:shadow-lg hover:border-accent-dynamic/50">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-dynamic/10 group-hover:bg-accent-dynamic/20 transition-colors">
                                    <Briefcase className="h-6 w-6 text-accent-dynamic" />
                                </div>
                                <h3 className="font-semibold">Projects</h3>
                                <p className="text-sm text-muted-foreground">Built more than 100+ projects</p>
                            </div>
                        </div>

                        {/* Tools Section */}
                        <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                            <h3 className="text-sm font-medium text-muted-foreground">Tools I use</h3>
                            <div className="flex gap-3 flex-wrap">
                                {/* VS Code */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.5 0L21.5 4V20L17.5 24L6 18V6L17.5 0Z" fill="#007ACC" />
                                        <path d="M17.5 4.5L9 9L6 7L17.5 0V4.5Z" fill="#FFFFFF" opacity="0.25" />
                                    </svg>
                                </div>

                                {/* Next.js */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0971-.0633c.8275-.5362 1.7034-1.3265 2.4254-2.1879 1.0429-1.2464 1.7454-2.6882 2.1096-4.3272.264-1.1927.3583-2.1783.3583-3.7403 0-1.5621-.0943-2.5477-.3583-3.7404-.652-4.506-3.8591-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-1.8413-2.8074-1.8457-2.8093v-2.6795c0-2.2338.0093-2.7154.0467-2.8093.0464-.1317.1251-.2195.2478-.2777.0865-.0406.1315-.0446.5218-.0446z" />
                                    </svg>
                                </div>


                                {/* Git */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                                        <path
                                            fill="#F05032"
                                            d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.924 3.043 1.837 1.837 0 0 1-2.6 0 1.846 1.846 0 0 1-.404-2.009l-2.48-2.48v6.519a1.837 1.837 0 0 1 .485 3.015c-.833.833-2.185.833-3.018 0a1.838 1.838 0 0 1 .485-3.015V9.017a1.838 1.838 0 0 1-.997-2.414L7.117 3.845.452 10.509a1.55 1.55 0 0 0 0 2.188l10.48 10.478a1.55 1.55 0 0 0 2.188 0l10.426-10.425a1.55 1.55 0 0 0 0-2.188"
                                        />
                                    </svg>
                                </div>

                                {/* React.js */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="#61DAFB">
                                        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501z" />
                                    </svg>
                                </div>


                                {/* Postman */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="#FF6C37">
                                        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z" />
                                    </svg>
                                </div>

                                {/* Laravel */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="#FF2D20">
                                        <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V8.556a.376.376 0 01.188-.326l9.026-5.193a.374.374 0 01.354-.006l9.026 5.193a.373.373 0 01.188.325v5.149l-4.323 2.489V11.28a.376.376 0 00-.188-.326L9.93 8.464a.316.316 0 00-.066-.027c-.008-.002-.016-.008-.024-.01a.348.348 0 00-.192 0c-.011.002-.02.008-.03.012-.02.008-.042.014-.062.025L.533 13.657a.376.376 0 00-.189.326v9.868c0 .135.073.26.189.326l9.026 5.193c.045.026.095.045.146.058.008.002.016.008.024.01a.348.348 0 00.192 0c.011-.002.02-.008.03-.012.02-.008.042-.014.062-.025l9.026-5.193a.376.376 0 00.188-.326v-9.868a.376.376 0 00-.188-.326l-4.323-2.489z" />
                                    </svg>
                                </div>

                                {/* MySQL */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="#4479A1">
                                        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.105.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
                                    </svg>
                                </div>

                                {/* PostgreSQL */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="#336791">
                                        <path d="M23.5594 14.7228a.5269.5269 0 00-.0563-.1191c-.139-.2632-.4768-.3418-.7122-.1559-.2316.1797-.2802.5247-.1178.7681.0274.0354.0575.0623.0885.0911.4.2858.648.7603.648 1.2723v.4c0 .2168-.1091.4195-.2932.5446-.6139.4169-1.3863.6472-2.1143.6472-.8645-.0167-1.3798-.2572-1.5296-.7161-.1069-.3266-.0575-.5989.1738-1.0527.1416-.2784.3462-.6529.5803-1.1787.7452-1.6754 1.0004-2.7701 1.0004-3.6956 0-.9027-.2146-1.4505-.6407-1.6318-.2235-.0954-.5177-.1167-.9506-.1167h-.0563v-.7973c0-.3942-.1487-.7144-.4454-.9647-.3236-.2735-.7755-.4185-1.3107-.4185-1.0925 0-2.0507.7079-2.4085 1.7805l-.0563.1859-.2719-.0151c-1.0104-.0525-1.9538.2325-2.6518.7944-.8579.6906-1.3467 1.7055-1.3467 2.7957 0 .2488.0302.4974.0906.7352a.4957.4957 0 00.4849.3942c.2146 0 .4093-.1383.4774-.3409.0604-.1797.0906-.3672.0906-.5547 0-.8187.3538-1.5987 1.003-2.1972.5177-.4785 1.1951-.7544 1.9086-.7817l.3991-.0151v-.3563c0-.8789.6709-1.6318 1.5598-1.7518.7906-.1071 1.448.1797 1.8431.8187.0814.1317.1258.2863.1258.4463 0 .0378-.0031.0756-.0062.1133-.0364.4463-.7543 1.3106-1.0619 1.6882l-.3236.3942c-.2868.3487-.5374.6528-.7514.9034-.5648.6572-.7725 1.0829-.7725 1.5888 0 .7879.4643 1.3773 1.4038 1.7794.6408.2784 1.4491.4168 2.4075.4168 1.3467 0 2.6216-.4487 3.5747-1.2539.2809-.238.4643-.5446.5359-.8936.0332-.1634.0453-.3409.0453-.5247.0001-.8489-.2685-1.6882-.7788-2.3794zm-3.2563-2.8589c0-.2488.2024-.4487.4519-.4487.2494 0 .4518.1997.4518.4487 0 .2489-.2024.4486-.4518.4486-.2495 0-.4519-.1997-.4519-.4486zM8.3481 14.7228a.5269.5269 0 00-.0563-.1191c-.139-.2632-.4769-.3418-.7122-.1559-.2316.1797-.2802.5247-.1178.7681.0274.0354.0575.0623.0885.0911.4.2858.6481.7603.6481 1.2723v.4c0 .2168-.1091.4195-.2932.5446-.6139.4169-1.3863.6472-2.1143.6472-.8645-.0167-1.3798-.2572-1.5296-.7161-.1069-.3266-.0575-.5989.1738-1.0527.1416-.2784.3462-.6529.5803-1.1787.7452-1.6754 1.0004-2.7701 1.0004-3.6956 0-.9027-.2146-1.4505-.6407-1.6318-.2235-.0954-.5177-.1167-.9506-.1167H4.337v-.7973c0-.3942-.1487-.7144-.4454-.9647-.3236-.2735-.7755-.4185-1.3107-.4185-1.0925 0-2.0507.7079-2.4085 1.7805l-.0563.1859-.2719-.0151C.7352 8.9358-.2082 9.2208-.906 9.7827c-.8579.6906-1.3467 1.7055-1.3467 2.7957 0 .2488.0302.4974.0906.7352a.4957.4957 0 00.4849.3942c.2146 0 .4093-.1383.4774-.3409.0604-.1797.0906-.3672.0906-.5547 0-.8187.3538-1.5987 1.003-2.1972.5177-.4785 1.1951-.7544 1.9086-.7817l.3991-.0151v-.3563c0-.8789.6709-1.6318 1.5598-1.7518.7906-.1071 1.448.1797 1.8431.8187.0814.1317.1258.2863.1258.4463 0 .0378-.0031.0756-.0062.1133-.0364.4463-.7543 1.3106-1.0619 1.6882l-.3236.3942c-.2868.3487-.5374.6528-.7514.9034-.5648.6572-.7725 1.0829-.7725 1.5888 0 .7879.4643 1.3773 1.4038 1.7794.6408.2784 1.4491.4168 2.4075.4168 1.3467 0 2.6216-.4487 3.5747-1.2539.2809-.238.4643-.5446.5359-.8936.0332-.1634.0453-.3409.0453-.5247.0001-.8489-.2685-1.6882-.7788-2.3794zM5.0918 11.864c0-.2488.2024-.4487.4519-.4487.2494 0 .4518.1997.4518.4487 0 .2489-.2024.4486-.4518.4486-.2495 0-.4519-.1997-.4519-.4486z" />
                                    </svg>
                                </div>

                                {/* Figma */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                                        <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                                        <path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
                                        <path fill="#1ABCFE" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
                                        <path fill="#0ACF83" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
                                        <path fill="#FF7262" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
                                    </svg>
                                </div>

                                {/* GitHub */}
                                <div className="group flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-accent-dynamic/10 transition-all hover:scale-110 hover:border-accent-dynamic/50 hover:shadow-lg">
                                    <svg className="h-7 w-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}