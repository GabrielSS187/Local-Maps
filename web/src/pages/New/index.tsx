import React from "react";

// Import Components
import Input from "../../components/Input";
//----------------------------------------------------------------

// Import Hooks
import { useState } from "react";
import useGetLocation from "../../hooks/useGetLocation";
//----------------------------------------------------------------

// Imports Gerais
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { TileLayer, Marker } from "react-leaflet";
import { categories } from "./categories";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//----------------------------------------------------------------

// Import Styles
import {
    Button,
    ButtonContainer,
    CategoryBox,
    CategoryContainer,
    CategoryImage,
    Container,
    Form,
    FormTitle,
    MapContainer,
    Section
} from "./styles"
//----------------------------------------------------------------

const New = () => {

    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        description: "",
        contact: "",
        category: "",
        coords: [0, 0]
    });
    const { coords } = useGetLocation();

    const onSubmit = async () => {

        const request = await fetch("http://localhost:3000/store", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formValues,
              latitude: formValues.coords[0],
              longitude: formValues.coords[1],
            }),
          });
      
          if (request.ok) {
            toast("Estabelecimento gravado com sucesso!", {
              type: "success",
              autoClose: 2000,
              onClose: () => navigate("/")
            }); 
        };
    };

    if (!coords) {
        return <h2>Obtendo localização ...</h2>
    };

    return (

        <Container>
            <Form onSubmit={(ev) => {
                ev.preventDefault();
                onSubmit();
            }}>
                <FormTitle>
                    Cadastro do comércio local
                </FormTitle>

                <Section>
                    Dados
                </Section>

                <Input
                label="Nome do local"
                name="name"
                value={formValues.name}
                onChange={setFormValues} />

                <Input
                label="Descrição"
                name="description"
                value={formValues.description}
                onChange={setFormValues} />

                <Input
                label="Contato"
                name="contact"
                value={formValues.contact}
                onChange={setFormValues} />

                <Section>Endereço</Section>

                <MapContainer center={{
                    lat: coords[0],
                    lng: coords[1]
                }as LatLngExpression }
                zoom={13}
                whenCreated={(map) => {
                    map.addEventListener("click", (event: LeafletMouseEvent) => {
                        setFormValues((prev) => ({ 
                            ...prev, 
                            coords: [event.latlng.lat, event.latlng.lng]
                        }))
                    });
                }} 
                >

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    <Marker position={[formValues.coords[0], formValues.coords[1]] as LatLngExpression } />
                </MapContainer>

                <Section>Categoria</Section>

                <CategoryContainer>
                    {categories.map((category) => (
                        <CategoryBox 
                        key={category.key}
                        onClick={() => {
                            setFormValues(prev => ({ ...prev, category: category.key }));
                        }}
                        isActive={formValues.category === category.key}
                        >
                            <CategoryImage src={category.url}/>
                                {category.label}
                        </CategoryBox>
                    ))}
                </CategoryContainer>
                
                <ButtonContainer>
                    <Button type="submit">Salvar</Button>
                </ButtonContainer>

            </Form>
        </Container>
    )
};

export default New;