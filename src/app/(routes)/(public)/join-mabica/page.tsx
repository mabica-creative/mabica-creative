"use client"

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/atoms/Card";
import { Separator } from "@/components/ui/Separator";
import {
  FaPenNib,
  FaPalette,
  FaCode,
  FaMusic,
  FaBullhorn,
  FaUserCog,
} from "react-icons/fa";
import Link from "next/link";

export default function JoinMabicaPage() {
  const roles = [
    { icon: <FaPenNib className="text-lg" />, label: "Penulis & Novelis" },
    { icon: <FaPalette className="text-lg" />, label: "Ilustrator & Komikus" },
    { icon: <FaMusic className="text-lg" />, label: "Musisi & Sound Designer" },
    { icon: <FaCode className="text-lg" />, label: "Developer & Programmer" },
    { icon: <FaBullhorn className="text-lg" />, label: "Content & Marketing" },
    { icon: <FaUserCog className="text-lg" />, label: "Project Manager" },
  ];

  return (
    <section className="py-10 px-4 mt-20 md:py-16 md:px-8 lg:px-16 bg-background text-foreground">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              ✨ Join MABICA (Mari Bikin Cerita)
            </h1>
            <p className="text-lg text-muted-foreground">
              Mari Bikin Cerita Bersama Kami — MABICA adalah ekosistem kreatif
              tempat para penulis, ilustrator, musisi, developer, dan kreator
              lainnya berkolaborasi menciptakan karya lintas media.
            </p>
            <Button
              className="py-6 px-8 w-full text-lg font-semibold md:w-auto"
            >
              <Link
                href="https://dsc.gg/mabica"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord Kami
              </Link>
            </Button>
          </div>

          {/* Roles Grid */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold md:text-2xl">
              🔍 Siapa yang Kami Cari?
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {roles.map((role, idx) => (
                <Card
                  key={idx}
                  className="flex gap-3 items-center p-4 transition-colors hover:bg-accent"
                >
                  {role.icon}
                  <span className="text-sm font-medium">{role.label}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Benefits and Join Process */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold md:text-2xl">
              🚀 Kenapa Gabung?
            </h2>
            <ul className="pl-5 space-y-3 text-lg list-disc list-inside">
              <li>Kolaborasi lintas bidang</li>
              <li>Belajar bareng lewat proyek nyata</li>
              <li>Bangun portofolio nyata & kredibel</li>
              <li>Komunitas suportif & terbuka</li>
              <li>Akses tools, template & wiki internal</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold md:text-2xl">
              📥 Cara Gabung
            </h2>
            <ol className="pl-5 space-y-3 text-lg list-decimal list-inside">
              <li>Pilih peran yang cocok</li>
              <li>
                Join server Discord kami di{" "}
                <Link
                  href="https://dsc.gg/mabica"
                  className="underline text-primary"
                  target="_blank"
                >
                  dsc.gg/mabica
                </Link>
              </li>
              <li>Chat/DM founder (@c.emy = Kemi atau @hope8173 = Rayzi)</li>
              <li>Tunggu respon (biasanya dalam 1-2 hari)</li>
            </ol>
          </div>
        </div>

        <Separator className="my-8" />

        {/* FAQ Section */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold md:text-2xl">❓ FAQ</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg bg-muted/50">
              <p className="mb-2 text-lg font-medium">
                Apakah ini komunitas terbuka?
              </p>
              <p>Ya, tapi tetap dikurasi agar selaras dengan visi Mabica.</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50">
              <p className="mb-2 text-lg font-medium">
                Apa ada komitmen waktu tertentu?
              </p>
              <p>
                Mabica fleksibel. Yang penting komunikasi & kontribusi jelas.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50">
              <p className="mb-2 text-lg font-medium">Apakah ada kompensasi?</p>
              <p>
                Beberapa proyek ada kompensasi, sebagian bersifat kolektif &
                open collaboration.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Footer Contact */}
        <div className="mt-8 text-lg text-center">
          📩 Punya pertanyaan? Hubungi{" "}
          <Link
            href="mailto:mabica.ce@gmail.com"
            className="underline text-primary"
          >
            mabica.ce@gmail.com
          </Link>{" "}
          atau DM di Discord
        </div>
      </div>
    </section>
  );
}
