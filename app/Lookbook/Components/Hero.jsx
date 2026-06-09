import React from 'react'

function Hero() {
    return (
        <>
            <section
                style={{
                    padding: "140px 20px",
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        color: "#B08D57",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        marginBottom: "20px",
                    }}
                >
                    Ink & Thread
                </p>

                <h1
                    style={{
                        fontSize: "72px",
                        fontWeight: "700",
                        marginBottom: "20px",
                    }}
                >
                    Lookbook
                </h1>

                <p
                    style={{
                        maxWidth: "700px",
                        margin: "auto",
                        color: "#999",
                        lineHeight: "1.8",
                    }}
                >
                    A visual journey through timeless silhouettes,
                    cinematic moods and stories woven into every thread.
                </p>
            </section>
        </>
    );
}

export default Hero
