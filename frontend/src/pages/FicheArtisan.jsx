import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import "../styles/fiche-artisan.scss";

export default function FicheArtisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtisan() {
      try {
        const res = await API.get(`/artisans/${id}`);
        setArtisan(res.data);
      } catch (err) {
        console.error("Erreur API fiche artisan", err);
      } finally {
        setLoading(false);
      }
    }

    fetchArtisan();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!artisan) return <p>Artisan introuvable</p>;

  return (
    <div className="fiche-artisan container">
      <h1>{artisan.nom}</h1>
      <p><strong>Spécialité :</strong> {artisan.specialite}</p>
      <p><strong>Ville :</strong> {artisan.ville}</p>
      <p><strong>Note :</strong> {artisan.note} ⭐</p>
      <p><strong>Description :</strong><br />{artisan.description}</p>

      {artisan.email && <p><strong>Email :</strong> {artisan.email}</p>}
      {artisan.site && (
        <p>
          <strong>Site :</strong>{" "}
          <a href={artisan.site} target="_blank" rel="noreferrer">
            {artisan.site}
          </a>
        </p>
      )}
    </div>
  );
}