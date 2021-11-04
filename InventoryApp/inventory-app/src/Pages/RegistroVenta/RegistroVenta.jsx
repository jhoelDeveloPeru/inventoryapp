import React from 'react'
import './RegistroVenta.css'
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
        stock:19,
        cantidad:5.90,
        precioUnit:5.90,
        subtotal:5.90,
        accion:'Eliminar'
    }
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
        key: 'accion',
    }
];


export default function RegistroVenta() {
    return (
        <div>
            <div className="subtitle"><label>Selección de Productos</label></div>
            <div className="container">
                <div >
                    Seleccione Producto:
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Seleccione un Producto"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="pb">Papel Bond A4 100Und</Option>
                        <Option value="cd">Cartulina Duplex M45</Option>
                        <Option value="lp">Lapicero Pilot 2</Option>
                        <Option value="ca">compas Artesco</Option>
                    </Select>
                </div>
                <div>
                    Ingrese cantidad:
                    <Input style={{ width: 200 }} placeholder="Ingrese Cantidad" />
                </div>
                <div className="item">
                    <Button style={{ width: 200 }} type="primary" ghost>Agregar</Button>
                </div>
            </div>
            <div className="tb">
                <Table dataSource={dataSource} columns={columns} />
            </div>
            <div className="subtitle"><label>Información de Facturación</label></div>
            <div className="container">
                <div>
                    Tipo de Documento:
                    <Input style={{ width: 200 }} placeholder="Ingrese Tipo de Documento" />
                </div>
                <div>
                    Número de Documento:
                    <Input style={{ width: 200 }} placeholder="Ingrese Número de Documento" />
                </div>
                <div>
                    Nombre:
                    <Input style={{ width: 200 }} placeholder="Ingrese Nombre" />
                </div>
                <div>
                    Apellido Paterno:
                    <Input style={{ width: 200 }} placeholder="Ingrese Apellido Paterno" />
                </div>
                <div>
                    Apellido Materno:
                    <Input style={{ width: 200 }} placeholder="Ingrese Apellido Materno" />
                </div>
                <div>
                    Dirección:
                    <Input style={{ width: 200 }} placeholder="Ingrese Dirección" />
                </div>
                <div>
                    Correo Electronico:
                    <Input style={{ width: 200 }} placeholder="Ingrese Correo Electronico" />
                </div>
            </div>
            <div className="container">
                <Button style={{ width: 200 }} type="primary">GUARDAR</Button>
            </div>
        </div>
    )
}