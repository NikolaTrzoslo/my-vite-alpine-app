import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function HomePage() {

const [selectedProduct, setSelectedProduct] = React.useState(null);

const openProduct = (product) => {
    setSelectedProduct(product);
};

const closeProduct = () => {
    setSelectedProduct(null);
};


const [cart, setCart] = React.useState([]);

const addToCart = (product) => {
    setCart(prev => {
        const existing = prev.find(item => item.name === product.name);
        if (existing) {
            return prev.map(item =>
                item.name === product.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }
        return [...prev, { ...product, quantity: 1 }];
    });
};

const increase = (name) => {
    setCart(prev => 
        prev.map(item =>
            item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
};

 const decrease = (name) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.name === name
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

const handleBuyNow = () => {
        alert('Dziękujemy za zainteresowanie naszymi produktami! Przejdź do sklepu, aby dokonać zakupu.');
    };
   
    return (
        <div className='StronaTytulowa'> 
        <header>
            <h1>Sklep internetowy z aromatycznymi zapachami</h1>
            <nav>
                <ul>
                    <li><a href="#">Nowości</a></li>
                    <li><a href="#">Bestsellery</a></li>
                    <li><a href="#">Limitowana Edycja</a></li>
                    <li><a href="#">Prezenty</a></li>
                    <li><a href="#">Dostępne tylko online</a></li>

                </ul>
            </nav>
        </header>

        <div className="Koszyk">
            <h3>Koszyk</h3>

        {cart.length === 0 && <p>Koszyk jest pusty</p>}

                {cart.map(item => (
                    <div className="KoszykItem" key={item.name}>
                        <span>{item.name}</span>
                        <span>{item.price} zł</span>

                        <div className="Ilosc">
                            <button onClick={() => decrease(item.name)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increase(item.name)}>+</button>
                        </div>
                    </div>
                ))}

                <h3>
                    Razem:{" "}
                   {(cart.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2)} zł

                </h3>
            </div>


{selectedProduct && (
    <div className="ModalTlo" onClick={closeProduct}>
        <div className="ModalOkno" onClick={(e) => e.stopPropagation()}>
            <button className="ZamknijModal" onClick={closeProduct}>×</button>

            <img src={selectedProduct.img} alt={selectedProduct.name} />

            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p className="Cena">{selectedProduct.price} zł</p>

            <button className="DodajDoKoszyka"
                onClick={() => addToCart(selectedProduct)}
            >
                Dodaj do koszyka
            </button>
        </div>
    </div>
)}

    <main className='StronaGlowna'>
    <div className='PodStronaGlowna'>
        <div className='TekstUmieszczenie'>
            <h2>Przywitaj się z aromatycznymi zapachami</h2>
            <p>
                Zadbaj o nie tylko wnętrze w swoim domu, ale także 
                o niesamowity klimat dzięki naszym aromatycznym zapachom.
                Oferujemy szeroki wybór świec, dyfuzorów i innych produktów,
                które wypełnią Twój dom pięknymi aromatami.
            </p>
            <button className='KupujTeraz' onClick={handleBuyNow}>
                Kupuj teraz
            </button>
        </div>

        <div className='UmiejsciowienieObrazka'>
            <img src="/Przywitanie.PNG" alt="ObrazekPrzywitalny"/>
        </div>
    </div>

    <div className='TekstDekoracyjny'>
        <span>Kadzidła i Kadzielnice</span>
        <span>Świece</span>
        <span>Świece w Łupinie kokosa</span>
        <span>Woski i kominki zapachowe</span>
    </div>

    <div className='ProduktySekcja'> 
        <div className='ProduktyGrid'>

    {/* 1 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Kominek Zapachowy",
            price: 39.99,
            img: "/Produkty/Kominek1Obraz.PNG",
            description: "Naturalny kominek zapachowy o ciepłym, drzewnym zapachu."
        })}
    >
        <img src="/Produkty/Kominek1Obraz.PNG" alt="Kominek1"/>
        <h3>Kominek Zapachowy</h3>
        <p>Naturalny kominek zapachowy o ciepłym, drzewnym zapachu.</p>
        <p className="Cena">39.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Kominek Zapachowy", price: 39.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 2 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Kominek Zapachowy Metaliczny",
            price: 49.99,
            img: "/Produkty/Kominek2Obraz.PNG",
            description: "Metaliczny kominek o eleganckiej fakturze i zdobieniach."
        })}
    >
        <img src="/Produkty/Kominek2Obraz.PNG" alt="Kominek2"/>
        <h3>Kominek Zapachowy Metaliczny</h3>
        <p>Metaliczny kominek o elegenackiej fakturze i zdobieniach.</p>
        <p className="Cena">49.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Kominek Zapachowy Metaliczny", price: 49.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 3 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Świeca Wiosna",
            price: 19.99,
            img: "/Produkty/Swieca1Obraz.PNG",
            description: "Naturalna świeca o świeżym, kwiatowym zapachu wiosny."
        })}
    >
        <img src="/Produkty/Swieca1Obraz.PNG" alt="Swieca1"/>
        <h3>Świeca Zapachowa Wiosna</h3>
        <p>Naturalna świeca o świeżym, kwiatowym zapachu wiosny.</p>
        <p className="Cena">19.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Świeca Wiosna", price: 19.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 4 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Świeca Tulipany",
            price: 24.99,
            img: "/Produkty/Swieca2Obraz.PNG",
            description: "Naturalna świeca o świeżym, kwiatowym zapachu tulipanów."
        })}
    >
        <img src="/Produkty/Swieca2Obraz.PNG" alt="Swieca2"/>
        <h3>Świeca Zapachowa Tulipany</h3>
        <p>Naturalna świeca o świeżym, kwiatowym zapachu tulipanów.</p>
        <p className="Cena">24.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Świeca Tulipany", price: 24.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 5 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Świeca Czarujący Bez",
            price: 29.99,
            img: "/Produkty/Swieca3Obraz.PNG",
            description: "Naturalna świeca o świeżym, kwiatowym zapachu czarującego bzu."
        })}
    >
        <img src="/Produkty/Swieca3Obraz.PNG" alt="Swieca3"/>
        <h3>Świeca Czarujący Bez</h3>
        <p>Naturalna świeca o świeżym, kwiatowym zapachu czarującego bzu.</p>
        <p className="Cena">29.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Świeca Czarujący Bez", price: 29.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 6 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Świeca Kokos Pomarańcza",
            price: 34.99,
            img: "/Produkty/SwieczkaWKokosie1Obraz.PNG",
            description: "Świeca w łupinie kokosa o zapachu pomarańczy i róży."
        })}
    >
        <img src="/Produkty/SwieczkaWKokosie1Obraz.PNG" alt="Kokos1"/>
        <h3>Świeca Kokos Pomarańcza</h3>
        <p>Świeca w łupinie kokosa o zapachu pomarańczy i róży.</p>
        <p className="Cena">34.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Świeca Kokos Pomarańcza", price: 34.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 7 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Świeca Kokos Kadzidło",
            price: 24.99,
            img: "/Produkty/SwieczkaWKokosie2Obraz.PNG",
            description: "Świeca sojowa w naturalnej łupinie kokosa o zapachu kadzidlanym."
        })}
    >
        <img src="/Produkty/SwieczkaWKokosie2Obraz.PNG" alt="Kokos2"/>
        <h3>Świeca Kokos Kadzidło</h3>
        <p>Świeca sojowa w naturalnej łupinie kokosa o zapachu kadzidlanym.</p>
        <p className="Cena">24.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Świeca Kokos Kadzidło", price: 24.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 8 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Świeca Kokos Magnolia",
            price: 29.99,
            img: "/Produkty/SwieczkaWKokosie3OBraz.PNG",
            description: "Świeca sojowa w naturalnej łupinie kokosa o zapachu magnolii i kaszmiru."
        })}
    >
        <img src="/Produkty/SwieczkaWKokosie3OBraz.PNG" alt="Kokos3"/>
        <h3>Świeca Kokos Magnolia</h3>
        <p>Świeca sojowa w naturalnej łupinie kokosa o zapachu magnolii i kaszmiru.</p>
        <p className="Cena">29.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Świeca Kokos Magnolia", price: 29.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 9 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Wosk Wanilia",
            price: 19.99,
            img: "/Produkty/Wosk1Obraz.PNG",
            description: "Naturalny wosk o ciepłym, waniliowym zapachu."
        })}
    >
        <img src="/Produkty/Wosk1Obraz.PNG" alt="Wosk1"/>
        <h3>Wosk Wanilia</h3>
        <p>Naturalny wosk o ciepłym, waniliowym zapachu.</p>
        <p className="Cena">19.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Wosk Wanilia", price: 19.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 10 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Wosk Kaszmir",
            price: 24.99,
            img: "/Produkty/Wosk2Obraz.PNG",
            description: "Naturalny wosk o kaszmirowym zapachu."
        })}
    >
        <img src="/Produkty/Wosk2Obraz.PNG" alt="Wosk2"/>
        <h3>Wosk Kaszmir</h3>
        <p>Naturalny wosk o kaszmirowym zapachu.</p>
        <p className="Cena">24.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Wosk Kaszmir", price: 24.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

    {/* 11 */}
    <div className='Produkt'
        onClick={() => openProduct({
            name: "Wosk Różane Drzewo",
            price: 29.99,
            img: "/Produkty/Wosk3Obraz.PNG",
            description: "Wosk o zapachu różanego drzewa."
        })}
    >
        <img src="/Produkty/Wosk3Obraz.PNG" alt="Wosk3"/>
        <h3>Wosk Różane Drzewo</h3>
        <p>Wosk o zapachu różanego drzewa.</p>
        <p className="Cena">29.99 zł</p>

        <button className="DodajDoKoszyka"
            onClick={(e) => {
                e.stopPropagation();
                addToCart({ name: "Wosk Różane Drzewo", price: 29.99 });
            }}
        >
            Dodaj do koszyka
        </button>
    </div>

</div>

    </div>

</main>
    </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HomePage />);