import {useDispatch} from 'react-redux';
import {OfferData} from '../../models/dataType/Offer';
import {OffersPageView} from './offers-page-view';
import React, {useEffect, useState} from 'react';
import {AppDispatch} from '../../redux/store';

// DONNÉES DE TEST EN ATTENDANT BD
const listOffres = [
  {
    id: '001',
    service: 'Déménagement',
    name: 'Mike',
    date: 'Mardi - 07 avril 2014',
    time: '10h30',
    estimation: 125,
  },
  {
    id: '002',
    service: 'Coiffure à domicile',
    name: 'John',
    date: 'Jeudi - 08 avril 2024',
    time: '15h30',
    estimation: 25,
  },
  {
    id: '003',
    service: 'Nettoyage à domicile',
    name: 'Sophie',
    date: 'Lundi - 15 mai 2024',
    time: '09h00',
    estimation: 40,
  },
  {
    id: '004',
    service: 'Jardinage',
    name: 'Lucas',
    date: 'Mercredi - 24 mai 2024',
    time: '14h00',
    estimation: 60,
  },
  {
    id: '005',
    service: 'Réparation électrique',
    name: 'Emma',
    date: 'Vendredi - 02 juin 2024',
    time: '16h30',
    estimation: 85,
  },
  {
    id: '006',
    service: 'Peinture intérieure',
    name: 'Hugo',
    date: 'Samedi - 10 juin 2024',
    time: '08h00',
    estimation: 150,
  },
] as OfferData[];

const OffersPage = ({navigation}: any) => {
  const [data, setData] = useState<OfferData[] | undefined>(undefined);

  const fetchOfferList = () => {
    // TODO: implémenter une vrai logique pour fetch les offres
    // nécessite BD fonctionnelle
    return listOffres;
  };

  const offersList = fetchOfferList();

  useEffect(() => {
    setData(offersList);
  }, []);

  return (
    <>
      <OffersPageView navigation={navigation} offersList={data} />
    </>
  );
};

export default OffersPage;
