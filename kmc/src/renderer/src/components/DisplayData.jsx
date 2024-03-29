import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const DisplayData = ({ data }) => {
    return (
        <div>
            {data.length === 0 ? (
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Typography variant="h5" gutterBottom>
                        Tên Sản Phẩm
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        STT
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Mã Hàng
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Loại Hàng
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Hàm Lượng
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Trọng Lượng Vàng
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Trọng Lượng Hột
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Tiền Công
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Ngày Mua
                    </Typography>
                </Paper>
            ) : (
                data.map((item, index) => (
                    <Paper key={index} elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5" gutterBottom>
                            {item.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            ID: {item.id}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Barcode: {item.barcode}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Type: {item.type}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Content: {item.content}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Total Weight: {item.totalWeight}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Individual Weight: {item.indiWeight}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Price: {item.price}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Buy Date: {item.buyDate}
                        </Typography>
                    </Paper>
                ))
            )}
        </div>
    );
};

export default DisplayData;
