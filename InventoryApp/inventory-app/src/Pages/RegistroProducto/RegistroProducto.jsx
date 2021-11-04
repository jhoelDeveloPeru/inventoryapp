import React from 'react'
import './RegistroProducto.css'
import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import { Table, Tag, Space } from 'antd';
const { Option } = Select;


const dataSource = [
    {
        item: 1,
        codigo: '08942304',
        producto: 'Papel Bond A4 100Und',
        stock: 19,
        accion: 'Eliminar'
    },
    {
        item: 2,
        codigo: '67436545',
        producto: 'Cartulina Duplex',
        stock: 34,
        accion: 'Eliminar'
    },
    {
        item: 3,
        codigo: '87487598',
        producto: 'Compas Artesco Pastico',
        stock: 57,
        accion: 'Eliminar'
    },
    {
        item: 4,
        codigo: '09997465',
        producto: 'Lapicero Pilot',
        stock: 108,
        accion: 'Eliminar'
    },
];

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
        title: 'Acción',
        dataIndex: 'accion',
        key: 'accion',
    }
];

export default function RegistroProducto() {
    return (
        <div>
            <div className="subtitle"><label>Nuevo Producto</label></div>
            <div className="container">
                <div>
                    Ingrese Código:
                    <Input style={{ width: 200 }} placeholder="Ingrese Código" />
                </div>
                <div >
                    Nombre Producto:
                    <Input style={{ width: 200 }} placeholder="Ingrese Nombre de Producto" />
                </div>
                <div className="item">
                    <Button style={{ width: 200 }} type="primary" ghost>Agregar</Button>
                </div>
            </div>
            <div className="tb">
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}
