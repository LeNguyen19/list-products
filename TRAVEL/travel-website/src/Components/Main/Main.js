import React from "react";
import "./main.css";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import { GrLocation } from "react-icons/gr";

export default function Main() {
  return (
    <div className="main container">
      <h2>Most visited destingtions</h2>
      <br />
      <div className="listCart grid">
        <div className="cart">
          <img src={img1} alt="" />
          <div className="cart__info">
            <h3>Galápagos Islands</h3>
            <p>
              <GrLocation></GrLocation> Ecuador
            </p>
          </div>
          <hr />
          <div className="cart__desc">
            <p>
              Galápagos is the paradise of nature lovers because it is home to
              many species of diverse species and colors... such as iguanas,
              turtles, penguins, harbors... Terrain Many volcanoes, jade-colored
              coastlines and rich ecosystems are the reasons why this place
              ranks 2nd on the list.
            </p>
          </div>
          <div className="cart__btn row">
            <button className="btn">DETAIL</button>
            <p>$700</p>
          </div>
        </div>
        <div className="cart">
          <img src={img2} alt="" />
          <div className="cart__info">
            <h3>National Park, Uluru-Kata Tjuta</h3>
            <p>
              <GrLocation></GrLocation> Australia
            </p>
          </div>
          <hr />
          <div className="cart__desc">
            <p>
              Exploring Uluru red rock mountain is a memorable and hard-to-miss
              experience for anyone who has ever been to Uluru-Kata Tjuta
              National Park. The mountain is considered by the Anangu indigenous
              people to be a sacred site and inhabited by their ancestors.
              Uluru-Kata Tjuta National Park is also a world heritage site,
              recognized by UNESCO for its natural and cultural values.
            </p>
          </div>
          <div className="cart__btn row">
            <button className="btn">DETAIL</button>
            <p>$600</p>
          </div>
        </div>
        <div className="cart">
          <img src={img3} alt="" />
          <div className="cart__info">
            <h3>Yellowstone National Park</h3>
            <p>
              <GrLocation></GrLocation> America
            </p>
          </div>
          <hr />
          <div className="cart__desc">
            <p>
              Yeallowstone is famous as an area with many underground hot
              springs and the largest in the world when there are more than 500
              active underground circuits. Among them is the largest and most
              colorful hot spring named Grand Prismatic.
            </p>
          </div>
          <div className="cart__btn row">
            <button className="btn">DETAIL</button>
            <p>$700</p>
          </div>
        </div>

        <div className="cart">
          <img src={img1} alt="" />
          <div className="cart__info">
            <h3>Galápagos Islands</h3>
            <p>
              <GrLocation></GrLocation> Ecuador
            </p>
          </div>
          <hr />
          <div className="cart__desc">
            <p>
              Galápagos is the paradise of nature lovers because it is home to
              many species of diverse species and colors... such as iguanas,
              turtles, penguins, harbors... Terrain Many volcanoes, jade-colored
              coastlines and rich ecosystems are the reasons why this place
              ranks 2nd on the list.
            </p>
          </div>
          <div className="cart__btn row">
            <button className="btn">DETAIL</button>
            <p>$700</p>
          </div>
        </div>
        <div className="cart">
          <img src={img2} alt="" />
          <div className="cart__info">
            <h3>National Park, Uluru-Kata Tjuta</h3>
            <p>
              <GrLocation></GrLocation> Australia
            </p>
          </div>
          <hr />
          <div className="cart__desc">
            <p>
              Exploring Uluru red rock mountain is a memorable and hard-to-miss
              experience for anyone who has ever been to Uluru-Kata Tjuta
              National Park. The mountain is considered by the Anangu indigenous
              people to be a sacred site and inhabited by their ancestors.
              Uluru-Kata Tjuta National Park is also a world heritage site,
              recognized by UNESCO for its natural and cultural values.
            </p>
          </div>
          <div className="cart__btn row">
            <button className="btn">DETAIL</button>
            <p>$600</p>
          </div>
        </div>
        <div className="cart">
          <img src={img3} alt="" />
          <div className="cart__info">
            <h3>Yellowstone National Park</h3>
            <p>
              <GrLocation></GrLocation> America
            </p>
          </div>
          <hr />
          <div className="cart__desc">
            <p>
              Yeallowstone is famous as an area with many underground hot
              springs and the largest in the world when there are more than 500
              active underground circuits. Among them is the largest and most
              colorful hot spring named Grand Prismatic.
            </p>
          </div>
          <div className="cart__btn row">
            <button className="btn">DETAIL</button>
            <p>$700</p>
          </div>
        </div>

        <div className="cart">
          <img src={img1} alt="" />
          <div className="cart__info">
            <h3>Galápagos Islands</h3>
            <p>
              <GrLocation></GrLocation> Ecuador
            </p>
          </div>
          <hr />
          <div className="cart__desc">
            <p>
              Galápagos is the paradise of nature lovers because it is home to
              many species of diverse species and colors... such as iguanas,
              turtles, penguins, harbors... Terrain Many volcanoes, jade-colored
              coastlines and rich ecosystems are the reasons why this place
              ranks 2nd on the list.
            </p>
          </div>
          <div className="cart__btn row">
            <button className="btn">DETAIL</button>
            <p>$700</p>
          </div>
        </div>
        <div className="cart">
          <img src={img2} alt="" />
          <div className="cart__info">
            <h3>National Park, Uluru-Kata Tjuta</h3>
            <p>
              <GrLocation></GrLocation> Australia
            </p>
          </div>
          <hr />
          <div className="cart__desc">
            <p>
              Exploring Uluru red rock mountain is a memorable and hard-to-miss
              experience for anyone who has ever been to Uluru-Kata Tjuta
              National Park. The mountain is considered by the Anangu indigenous
              people to be a sacred site and inhabited by their ancestors.
              Uluru-Kata Tjuta National Park is also a world heritage site,
              recognized by UNESCO for its natural and cultural values.
            </p>
          </div>
          <div className="cart__btn row">
            <button className="btn">DETAIL</button>
            <p>$600</p>
          </div>
        </div>
        <div className="cart">
          <img src={img3} alt="" />
          <div className="cart__info">
            <h3>Yellowstone National Park</h3>
            <p>
              <GrLocation></GrLocation> America
            </p>
          </div>
          <hr />
          <div className="cart__desc">
            <p>
              Yeallowstone is famous as an area with many underground hot
              springs and the largest in the world when there are more than 500
              active underground circuits. Among them is the largest and most
              colorful hot spring named Grand Prismatic.
            </p>
          </div>
          <div className="cart__btn row">
            <button className="btn">DETAIL</button>
            <p>$700</p>
          </div>
        </div>
      </div>
    </div>
  );
}
