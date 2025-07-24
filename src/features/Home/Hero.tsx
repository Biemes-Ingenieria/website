import Image from "next/image";
import styles from "@/styles/hero.module.css";

export const Hero = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className={styles.container}>
        <Image
          src="/company.png"
          alt="Nombre Compañía: Biemes"
          width={513}
          height={128}
        />

        <div
          className={styles.content} /*className="flex justify-center gap-20"*/
        >
          <Image
            src="/maintenance.svg"
            alt="Ícono sitio en construcción"
            width={238}
            height={224}
          />

          <div className={styles.text} /*className="flex flex-col"*/>
            <h1 className="text-4xl text-[#1a2b4a]">¡Sitio en construcción!</h1>

            <div
              className={
                styles.description
              } /*className="flex flex-col items-center"*/
            >
              <p className="text-3xl text-[#1a2b4a]">
                Estamos construyendo nuestro sitio web para ofrecerte lo mejor.
                Mientras tanto, podés encontrarnos en Instagram:
              </p>
            </div>

            <div className={styles.socialMedia}>
              <Image
                src="/instagram.svg"
                alt="Logo Instagram"
                width={39}
                height={39}
              />
              <h2 className="text-3xl text-[#1a2b4a]">Biemes.ingenieria</h2>
            </div>

            <div className={styles.thanks}>
              <h3 className="text-3xl text-[#1a2b4a]">¡Gracias por tu paciencia!</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
