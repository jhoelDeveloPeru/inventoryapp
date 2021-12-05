import React, { useState, useEffect } from 'react'
import './RegistroVenta.css'
import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import { Table, Popconfirm, message } from 'antd';

const { Option } = Select;


var item = 0
export default function RegistroVenta() {
    const [soldProducts, setSoldProduct] = useState([])
    const [cantidad, setCantidad] = useState("")
    const [productSelected, setproductSelected] = useState(null)
    const [tipoDoc, setTipoDoc] = useState(null)
    const [numDoc, setNumDoc] = useState("")
    const [nombre, setNombre] = useState("")
    const [apePat, setApePat] = useState("")
    const [apeMat, setApeMat] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail] = useState("")
    const columns = [
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
        },
        {
            title: 'Código',
            dataIndex: 'codigo',
            key: 'codigo',
        },
        {
            title: 'Producto',
            dataIndex: 'producto',
            key: 'producto',
        },
        {
            title: 'Stock Disponible',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Cantidad',
            dataIndex: 'cantidad',
            key: 'cantidad',
        },
        {
            title: 'Precio Unit.',
            dataIndex: 'precioUnit',
            key: 'precioUnit',
        },
        {
            title: 'Subtotal',
            dataIndex: 'subtotal',
            key: 'subtotal',
        },
        {
            title: 'Acción',
            dataIndex: 'accion',
            render: (_, record) =>
                soldProducts.length >= 1 ? (
                    <Popconfirm title="seguro que desea eliminar?" onConfirm={() => handleDelete(record.item)}>
                        <a>Eliminar</a>
                    </Popconfirm>
                ) : null,
        },
    ];
    const Products = [
        {
            Codigo: '2037839304',
            Descripcion: 'Papel Bond A4 100Und',
            Precio: '7.50',
            Stock: '102'
        },
        {
            Codigo: '2037457856',
            Descripcion: 'Cartulina Duplex M45',
            Precio: '8.40',
            Stock: '83'
        },
        {
            Codigo: '2037784367',
            Descripcion: 'Lapicero Pilot 2 100Und',
            Precio: '125.00',
            Stock: '66'
        },
        {
            Codigo: '2037098765',
            Descripcion: 'Compas Artesco M101',
            Precio: '18.20',
            Stock: '96'
        },
    ]

    const agregarProducto = () => {
        if (cantidad == "") {
            alert("Ingrese la cantidad")
            return
        }
        if (productSelected == "" || productSelected == null) {
            alert("Seleccione un Producto")
            return
        }
        const soldPrd = soldProducts.filter((item) => {
            return item.codigo == productSelected
        })

        if (soldPrd.length > 0) {
            alert("El producto ya fué agregado")
            return
        }
        var itemSelected = Products.filter((item) => {
            return item.Codigo == productSelected
        })[0]
        item = soldProducts.length + 1
        var soldProduct = {
            item: item,
            codigo: itemSelected.Codigo,
            producto: itemSelected.Descripcion,
            stock: itemSelected.Stock,
            cantidad: cantidad,
            precioUnit: itemSelected.Precio,
            subtotal: (cantidad * parseFloat(itemSelected.Precio).toFixed(2))
        }
        setSoldProduct([...soldProducts, soldProduct])
        setCantidad("")
        setproductSelected(null)
    }

    const handleDelete = (key) => {
        var dataSource = [...soldProducts];
        dataSource = dataSource.filter((item) => item.item !== key)
        setSoldProduct(dataSource)
    };

    const guardarVenta = () => {
        setSoldProduct([])
        setTipoDoc(null)
        setNumDoc("")
        setNombre("")
        setApePat("")
        setApeMat("")
        setDireccion("")
        setEmail("")
        message.success('Los datos fueron guardados correctamente');
    }
    return (
        <div>
            <div className="subtitle"><label>Selección de Productos</label></div>
            <div className="container">
                <div className="item">
                    <label>Seleccione Producto:</label>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Seleccione un Producto"
                        optionFilterProp="children"
                        onChange={value => setproductSelected(value)}
                        value={productSelected}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {Products.map(item => (
                            <Option key={item.Codigo} value={item.codigo}>{item.Descripcion}</Option>
                        ))}
                    </Select>
                </div>
                <div className="item">
                    <label>Ingrese cantidad:</label>
                    <Input style={{ width: 200 }} placeholder="Ingrese Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                </div>
                <div className="item">
                    <label></label>
                    <Button style={{ width: 200 }} type="primary" ghost onClick={agregarProducto}>Agregar</Button>
                </div>
            </div>
            <div className="tb">
                <Table dataSource={soldProducts} columns={columns} rowKey="item" pagination={false} />
            </div>
            <div className="subtitle"><label>Información de Facturación</label></div>
            <div className="container-responsive">
                <div className="item">
                    Tipo de Documento:
                    <Select
                        showSearch
                        style={{ width: 250 }}
                        placeholder="Seleccione Tipo de Documento"
                        optionFilterProp="children"
                        onChange={value => setTipoDoc(value)}
                        value={tipoDoc}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >

                        <Option value="DNI">DNI</Option>
                        <Option value="CE">CE</Option>
                        <Option value="RUC">RUC</Option>
                    </Select>
                </div>
                <div className="item">
                    Número de Documento:
                    <Input style={{ width: 250 }} placeholder="Ingrese Número de Documento" onChange={e => setNumDoc(e.target.value)}
                        value={numDoc}/>
                </div>
                <div className="item">
                    Nombre:
                    <Input style={{ width: 250 }} placeholder="Ingrese Nombre" onChange={e => setNombre(e.target.value)}
                        value={nombre}/>
                </div>
                <div className="item">
                    Apellido Paterno:
                    <Input style={{ width: 250 }} placeholder="Ingrese Apellido Paterno" onChange={e => setApePat(e.target.value)}
                        value={apePat}/>
                </div>
                <div className="item">
                    Apellido Materno:
                    <Input style={{ width: 250 }} placeholder="Ingrese Apellido Materno" onChange={e => setApeMat(e.target.value)}
                        value={apeMat}/>
                </div>
                <div className="item">
                    Dirección:
                    <Input style={{ width: 250 }} placeholder="Ingrese Dirección" onChange={e => setDireccion(e.target.value)}
                        value={direccion}/>
                </div>
                <div className="item">
                    Correo Electronico:
                    <Input style={{ width: 250 }} placeholder="Ingrese Correo Electronico" onChange={e => setEmail(e.target.value)}
                        value={email}/>
                </div>
            </div>
            <div className="container-responsive btn-ctn">
                <Button style={{ width: 250 }} className="btn-round" type="primary" onClick={guardarVenta}>Guardar</Button>
            </div>
        </div>
    )
}