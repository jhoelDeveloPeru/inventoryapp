import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RegistroProducto.css'
import { Table, Space } from 'antd';
import { Modal } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import { initAxiosInterceptors } from '../../Helpers/auth-helpers';
const { Option } = Select;
const { Column } = Table;

initAxiosInterceptors()

const columns = [
    {
        title: 'Item',
        dataIndex: 'Id',
        key: 'Id',
    },
    {
        title: 'Código',
        dataIndex: 'Code',
        key: 'Code',
    },
    {
        title: 'Nombre',
        dataIndex: 'Name',
        key: 'Name',
    },
    {
        title: 'Stock Disponible',
        dataIndex: 'Quantity',
        key: 'Quantity',
    }
];

export default function RegistroProducto() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [products, setProducts] = useState([])
    const [codeProduct, setCodeProduct] = useState('')
    const [nameProduct, setNameProduct] = useState('')
    const [stockProduct, setStockProduct] = useState('')

    async function getProducts() {
        try {
            //const data = await axios.get('https://inventoryapis.azurewebsites.net/api/product/listado')

            var prds = [{
                Id: "1",
                Code: "20784523",
                Name: "Papel Bond A4 100Und",
                Quantity:12
            },
            {
                Id: "1",
                Code: "20564389",
                Name: "Cartulina Duplex M45",
                Quantity:24
            },
            {
                Id: "1",
                Code: "20436478",
                Name: "Lapicero Pilot 2 100Und",
                Quantity:35
            },
            {
                Id: "1",
                Code: "20676745",
                Name: "Compas Artesco M101",
                Quantity:18
            },
        ]
            setProducts(prds)
        } catch (error) {
            alert(error)
        }
    }

    async function addProduct() {
        try {
            const data = await axios.post('https://inventoryapis.azurewebsites.net/api/product/registro',
                {
                    "Code": codeProduct,
                    "Name": nameProduct,
                    "Quantity": parseInt(stockProduct)
                }
            )
            clearForm()
            getProducts()
        } catch (error) {
            alert(error)
        }
    }

    const showModal = () => {
        clearForm()
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if (validateForm()) {
            setIsModalVisible(false);
            addProduct()
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function clearForm() {
        setCodeProduct('')
        setNameProduct('')
        setStockProduct('')
    }

    function validateForm() {
        if (codeProduct == "" || nameProduct == "" || stockProduct == "") {
            alert('Debe completar los datos')
            return false
        }
        return true
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div className="subtitle"><label>Productos</label></div>
            <div className="container">
                <div className="item">
                    Código Producto:
                    <Input style={{ width: 200 }} placeholder="Ingrese Código" value={codeProduct} onChange={(e) => setCodeProduct(e.target.value)} />
                </div>
                <div className="item">
                    Nombre Producto:
                    <Input style={{ width: 200 }} placeholder="Ingrese Nombre de Producto" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
                </div>
                <div className="item">
                    <label></label>
                    <Button style={{ width: 200 }} type="primary">Buscar</Button>
                </div>
                <div className="item">
                    <label></label>
                    <Button style={{ width: 200 }} type="primary" ghost onClick={showModal}>Agregar</Button>
                </div>
            </div>
            <div className="tb">
                <Table dataSource={products} >
                    <Column title="Item" dataIndex="Id" key="Id" />
                    <Column title="Código" dataIndex="Code" key="Code" />
                    <Column title="Descripción" dataIndex="Name" key="Name" />
                    <Column title="Stock" dataIndex="Quantity" key="Quantity" />
                    <Column
                        title="Acción"
                        key="action"
                        width={200}
                        render={(text, record) => (
                            <Space size="middle">
                                <Button type="info" >Editar</Button>
                                <Button type="danger" >Eliminar</Button>
                            </Space>
                        )}
                    />
                </Table>
            </div>
            <Modal title="Nuevo Producto" visible={isModalVisible} onOk={handleOk}
                onCancel={handleCancel} okText="Guardar" cancelText="Cancelar" width={760}>
                <div className="container">
                    <div>
                        Código Producto:
                        <Input style={{ width: 200 }} placeholder="Ingrese Código" value={codeProduct} onChange={(e) => setCodeProduct(e.target.value)} />
                    </div>
                    <div >
                        Nombre Producto:
                        <Input style={{ width: 200 }} placeholder="Ingrese Nombre de Producto" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
                    </div>
                    <div >
                        Stock Inicial:
                        <Input style={{ width: 200 }} placeholder="Ingrese Stock Inicial" value={stockProduct} onChange={(e) => setStockProduct(e.target.value)} onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}
