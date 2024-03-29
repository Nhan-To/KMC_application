import React, { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "../assets/Purchase.css";

function Purchase() {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        barcode: '',
        type: '',
        content: '',
        totalWeight: '',
        indiWeight: '',
        price: ''
    });
    const [alert, setAlert] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const dataWithDate = {
            ...formData,
            buyDate: formattedDate
        };
        try {
            await axios.post(`https://kmc-backend.onrender.com/items`, dataWithDate);
            setAlert({
                type: 'success',
                message: 'Successfully submitted the form.'
            });
        } catch (error) {
            setAlert({
                type: 'error',
                message: 'An error occurred while submitting the form. Please try again later.'
            });
        }
    };

    return (
        <div className="purchase-container">
            <h1>Thông tin hàng nhập</h1>
            {alert && (
                <Alert severity={alert.type} onClose={() => setAlert(null)}>
                    {alert.message}
                </Alert>
            )}
            <form className="purchase-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-field">
                        <label>Tên Sản Phẩm</label>
                        <TextField
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="form-field">
                        <label>STT</label>
                        <TextField
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <label>Mã Hàng</label>
                        <TextField
                            name="barcode"
                            value={formData.barcode}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="form-field">
                        <label>Loại Hàng</label>
                        <TextField
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <label>Hàm Lượng</label>
                        <TextField
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="form-field">
                        <label>Trọng Lượng Vàng</label>
                        <TextField
                            name="totalWeight"
                            value={formData.totalWeight}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <label>Trọng Lượng Hột</label>
                        <TextField
                            name="indiWeight"
                            value={formData.indiWeight}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="form-field">
                        <label>Tiền Công</label>
                        <TextField
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Purchase;
