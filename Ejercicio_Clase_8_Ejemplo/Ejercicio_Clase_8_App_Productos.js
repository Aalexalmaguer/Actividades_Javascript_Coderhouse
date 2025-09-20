const form = document.getElementById("productForm");
const container = document.getElementById("productsContainer");
let productId = 1;
let products = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const description = document.getElementById("productDescription").value;

    const product = {
        id: productId++,
        name: name,
        price: price,
        description: description,
    };

    products.push(product);
    renderProduct(product);
    form.reset();
});

function renderProduct(product) {
    const productDiv = document.createElement("div");
    productDiv.dataset.id = product.id;

    productDiv.innerHTML = `
        <div>
            <p><strong>${product.name}</strong> - $${product.price}</p>
            <p>${product.description}</p>
            <button> Eliminar</button>
        </div>
        `;

        productDiv.querySelector("button").addEventListener("click", () => {
            deleteProduct(product.id);
        });

        container.appendChild(productDiv);
    }

function deleteProduct(id) {
    products = products.filter((product) => product.id != id);

    // Eliminamos solo el producto correspondiente
    const productDiv = container.querySelector(`[data-id="${id}"]`);
    if (productDiv) productDiv.remove();
}