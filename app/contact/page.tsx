// app/contact/page.tsx

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { Range, getTrackBackground } from "react-range";


interface IFormInput {
  prenom: string;
  nom: string;
  email: string;
  descriptionProjet: string;
  nomEntreprise?: string;
  budget: [number, number];
}

const schema = yup.object().shape({
  prenom: yup.string().required("Le prénom est requis"),
  nom: yup.string().required("Le nom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  descriptionProjet: yup.string().required("La description du projet est requise"),
  nomEntreprise: yup.string(),
  budget: yup.array().of(yup.number().min(200).max(10000)).required("Le budget est requis"),
});

const ContactPage: React.FC = () => {
  const [verified, setVerified] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<IFormInput>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (!verified) {
      alert("Veuillez vérifier le captcha");
      return;
    }

    const templateParams = {
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      nomEntreprise: data.nomEntreprise || "N/A",
      budgetMin: data.budget[0],
      budgetMax: data.budget[1],
      descriptionProjet: data.descriptionProjet,
    };

    emailjs
      .send(
        "service_7lmaoik",
        "template_i1idv6s",
        templateParams,
        "tfJUMZ9MQDhGLUap3"
      ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Votre demande a été envoyée avec succès !");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Une erreur s'est produite, veuillez réessayer.");
      }
    );
  };

  const onChangeCaptcha = (value: string | null) => {
    setVerified(!!value);
  };
  const budget = watch('budget', [200, 10000]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-4xl mb-6">Contactez-nous</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded shadow">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
            <input
              id="prenom"
              {...register("prenom")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom.message}</p>}
          </div>
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              id="nom"
              {...register("nom")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="nomEntreprise" className="block text-sm font-medium text-gray-700">Nom de l&apos;entreprise (Optionnel)</label>
          <input
            id="nomEntreprise"
            {...register("nomEntreprise")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget souhaité</label>
          <Range
            values={budget}
            step={100}
            min={200}
            max={10000}
            onChange={(values: number[]) => setValue('budget', values as [number, number])}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '6px',
                  width: '100%',
                  background: getTrackBackground({
                    values: budget,
                    colors: ['#ccc', '#548BF4', '#ccc'],
                    min: 200,
                    max: 10000
                  })
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '24px',
                  width: '24px',
                  backgroundColor: '#548BF4'
                }}
              />
            )}
          />
   
        
          <div className="text-center mt-2">
            {`Budget: ${budget[0]}€ - ${budget[1]}€`}
          </div>
          {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionProjet" className="block text-sm font-medium text-gray-700">Description du projet</label>
          <textarea
            id="descriptionProjet"
            {...register("descriptionProjet")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            rows={4}
          ></textarea>
          {errors.descriptionProjet && <p className="text-red-500 text-sm mt-1">{errors.descriptionProjet.message}</p>}
        </div>
        <div className="mb-4">
          <ReCAPTCHA
            sitekey="6LcMc-YpAAAAAPth_79zWvtvU51N-oMAH5_Sr6kw"
            onChange={onChangeCaptcha}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
