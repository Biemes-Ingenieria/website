import Image from "next/image";
import styles from "@/styles/maintenance.module.css";

export const Maintenance = () => {
  return (
    <section className="w-full h-full flex flex-col lg:flex-row items-center justify-between lg:justify-start gap-52">
      <Image
        src="/rectangle.svg"
        alt="Imagen decorativa"
        width={0}
        height={0}
        className="hidden lg:block w-auto h-[100%]"
      />

      <div className={styles.container}>
        <div className="relative w-[300px] h-[75px] lg:w-[500px] lg:h-[125px] xl:w-[525px] xl:h-[128px]">
          <Image src="/company.png" alt="Nombre Compañía: Biemes" fill />
        </div>

        <div className={styles.content}>
          <div className="relative w-[15vw] h-[10vh] lg:w-[150px] lg:h-[150px] xl:w-[238px] xl:h-[224px]">
            <Image
              src="/maintenance.svg"
              alt="Ícono sitio en construcción"
              fill
            />
          </div>

          <div className={styles.text}>
            <h1 className="text-2xl text-[#1a2b4a] lg:text-3xl 2xl:text-4xl">
              ¡Sitio en construcción!
            </h1>

            <div className={styles.description}>
              <p className="text-1xl text-[#1a2b4a] lg:text-2xl 2xl:text-3xl">
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
              <h2 className="text-1xl text-[#1a2b4a] lg:text-2xl 2xl:text-4xl">
                Biemes.ingenieria
              </h2>
            </div>

            <div className={styles.thanks}>
              <h3 className="text-1xl text-[#1a2b4a] lg:text-2xl 2xl:text-4xl">
                ¡Gracias por tu paciencia!
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/rectangle-mobile.svg"
        alt="Imagen decorativa"
        width={0}
        height={0}
        className="block lg:hidden w-[100vw] h-auto max-h-[300px] object-cover"
      />
    </section>
  );
};
