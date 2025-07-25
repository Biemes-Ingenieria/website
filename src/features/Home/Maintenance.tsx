import Image from "next/image";
import styles from "@/styles/maintenance.module.css";

export const Maintenance = () => {
  return (
    <section className="w-full h-full flex items-center justify-center lg:justify-start gap-52">
      <Image
        src="/rectangle.svg"
        alt="Imagen decorativa"
         width={0}
        height={0}
        className="hidden lg:block"
        style={{
          height: "100%",
          width: "auto",
        }}
      />

      <div className={styles.container}>
        <Image
          src="/company.png"
          alt="Nombre Compañía: Biemes"
          width={513}
          height={128}
        />

        <div className={styles.content}>
          <Image
            src="/maintenance.svg"
            alt="Ícono sitio en construcción"
            width={238}
            height={224}
            id="maintenance-icon"
          />

          <div className={styles.text}>
            <h1 className="text-2xl text-[#1a2b4a] lg:text-4xl">¡Sitio en construcción!</h1>

            <div className={styles.description}>
              <p className="text-1xl text-[#1a2b4a] lg:text-3xl">
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
              <h2 className="text-1xl text-[#1a2b4a] lg:text-3xl">Biemes.ingenieria</h2>
            </div>

            <div className={styles.thanks}>
              <h3 className="text-1xl text-[#1a2b4a] lg:text-4xl">
                ¡Gracias por tu paciencia!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
