import React, { useEffect, useState } from "react";

export default function AboutContent() {
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll(".fade-in");
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                }),
            { threshold: 0.2 }
        );
        sections.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className="about-container">
            <h1 className="fade-in">关于我</h1>
            <h2 className="fade-in">职业背景 · 技术成长</h2>

            <p className="fade-in">
                余乃大学三年级生，习软件工程业。心怀高远，欲以勤学备考研，志在<span className="highlight">
                    上海交通大学
                    <img src="/SJTU.svg" className="tech-icon" aria-hidden="true"></img>
                </span>软件工程专业深造。{" "}
                <span className="highlight">前路漫漫，唯愿砥砺前行，不负韶华，笃志求真，图成大业。</span>
            </p>
            <p className="fade-in">
                余略通诸般编程技艺，熟悉{" "}
                <span className="highlight">
                    JavaScript
                    <i class="devicon-javascript-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    TypeScript
                    <i class="devicon-typescript-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    React
                    <i class="devicon-react-original tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Node.js
                    <i class="devicon-nodejs-plain-wordmark tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Docker
                    <i class="devicon-docker-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Git
                    <i class="fa-solid fa-code-branch tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Linux
                    <i class="devicon-linux-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Unix
                    <i class="devicon-unix-original tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    C#
                    <i class="devicon-csharp-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Unity
                    <i class="devicon-unity-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Python
                    <i class="devicon-python-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Java
                    <i class="devicon-java-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Assembly
                    <i class="devicon-wasm-original tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    SQLServe
                    <i class="devicon-azuresqldatabase-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    PHP
                    <i class="devicon-php-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    LATEX
                    <i class="devicon-latex-original tech-icon" aria-hidden="true"></i>
                </span>{" "}及{" "}
                <span className="highlight">
                    云计算
                    <i className="fa-solid fa-cloud tech-icon" aria-hidden="true"></i>
                </span>{" "}
                等新兴技术。凡当今之所需，皆愿涉猎，力求臻于至善。
            </p>
            <p>
                日常所用设备：<span className="highlight">iPhone 16 Pro</span>、<span className="highlight">OPPO Reno 10</span>、<span className="highlight">MacBook Pro（M4 芯片）</span>，兼备便携与性能，适于学习与开发之需。另常辅以显示器、机械键盘与降噪耳机等辅助设备，以提升专注效率。
            </p>
            <p>
                主要开发工具：<span className="highlight">
                    Visual Studio Code
                    <i class="devicon-vscode-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Visual Studio
                    <i class="devicon-visualstudio-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Google Chrome
                    <i class="devicon-chrome-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    Google Cloud
                    <i class="devicon-googlecloud-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    VMware 虚拟机
                    <i class="devicon-vsphere-plain tech-icon" aria-hidden="true"></i>
                </span>、
                <span className="highlight">
                    SQL Server Management Studio（SSMS）

                </span>等，辅以 Git、终端工具与 Markdown 编辑器。日常编程、调试、测试与文档撰写，皆赖此助力。
            </p>
            <p className="fade-in">
                热爱开源、技术写作与系统设计，探索 <span className="highlight">AI + Web</span>{" "}
                的结合。
                性喜开源之道，乐撰技术之文，尤擅系统架构之理，志在探索<span className="highlight">人工智能</span>与<span className="highlight">网页</span>交融之可能，追逐未来之光。
            </p>
            <p className="fade-in">
                雅好计算机、羽球、音律、琴艺、野游、游戏、及斯诺克之道，心性广博，不拘一艺。
            </p>
            <p>
                语言方面，英语已达六级，能读写通畅，交流自如。
            </p>
            <p>
                今于学业之隙，研习新知，尤以实践为要。
                方精修于「人工智能」、「算法设计」、「前端框架」之理，兼习「React」与「Astro」之架构，操演其法以应博客项目之用。
                亦潜心于「后端系统」与「分布式部署」，尝试以 Docker、Node.js 构建微服务架构。
                若夫「算法与数据结构」，则每日勤演，不敢稍懈；「英语词汇与阅读」亦常温习，以备日后研考之需。
                凡有所学，皆致力融通贯用，不独求其术，亦求其理。
            </p>
            <p className="highlight fade-in">
                昔有言曰：`代码者，逻辑之诗也；算法者，未来之道也。`余深以为然，铭刻于心，以此为志。
            </p>
            {/* <p className="table-scroll">
                <table>
                    <thead>
                        <tr>
                            <th>技能</th>
                            <th>熟练度</th>
                            <th>学习时长</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>JavaScript</td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>3年+</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>⭐⭐⭐⭐</td>
                            <td>2年</td>
                        </tr>
                    </tbody>
                </table>
            </p> */}


            <div className="image-block fade-in">
                <img src="/public/logo.jpg" alt="这是我的照片" />
                <div className="image-caption">工作中的我，在参与某项目</div>
            </div>

            <div
                className="coords"
                onMouseEnter={() => setShowMap(true)}
                onMouseLeave={() => setShowMap(false)}
            >
                📍 37.4221° N, 122.0841° W
                {showMap && (
                    <div className="map-popup">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.792138119001!2d-122.0842496846939!3d37.422065979824196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7306ff8d9c9%3A0xa977174a81d9e68b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1680015986143"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
}
