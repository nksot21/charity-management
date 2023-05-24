import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Introduction.css'
import transparentImg from '../../../assets/images/landingpage/pen.png'
import connectionImg from '../../../assets/images/landingpage/vector.png'
import convenientImg from '../../../assets/images/landingpage/drawing.png'
export default function Introduction() {
  return (
        <Container style={{width: '100%', marginTop: "50px", padding: '0'}}>
            <Row>
                <Col style={{textAlign: 'center'}}>
                    <p className='intro-heading-1'>Giới thiệu chung</p>
                    <p className='intro-text'>Tổ chức từ thiện aSheep cung cấp cho các nhà hảo tâm một nền tảng từ thiện minh bạch, thuận tiện, theo dõi và chia sẻ thông tin. aSheep được xây dựng với sứ mệnh mang đến cho các nhà hảo tâm một công cụ minh bạch, rõ ràng và thuận tiện nhất giúp các nhà hảo tâm yên tâm trong việc quyên góp cho các hoạt động từ thiện.</p>
                </Col>
            </Row>
            <Row style={{marginTop: '25px'}}>
                <Col className='col-4' >
                    <div>
                        <img className='mx-auto d-block' style={{width: '75px', height:'75px', objectFit: 'contain'}} src={transparentImg}/>
                        <p className='intro-heading-2' style={{textAlign: 'center'}}> Minh bạch</p>
                        <p className='intro-text-2'  style={{textAlign: 'center'}}>Giúp bạn nhanh chóng thiết lập mục tiêu, minh bạch sao kê tài khoản, lập báo cáo thu chi theo quy định, đăng bài viết, cập nhật các hoạt động, kết nối với nhà hảo tâm mọi lúc mọi nơi.</p>
                    </div>
                    
                </Col>
                <Col className='col-4'>
                    <div style={{alignItems: 'center'}}>
                        <img className='mx-auto d-block' style={{width: '75px', height:'75px', objectFit: 'contain'}} src={connectionImg} />
                        <p className='intro-heading-2' style={{textAlign: 'center'}}> Kết nối</p>
                        <p className='intro-text-2' style={{textAlign: 'center'}}>Kết nối bạn với các nhà hảo tâm khác và kết nối trực tiếp với các chiến dịch, giúp bạn có thể nắm bắt thông tin chi tiết hơn và cảm thấy yên tâm khi đóng góp cho aSheep.</p>
                    </div>
                </Col>
                <Col className='col-4'>
                    <div >
                        <img className='mx-auto d-block' style={{width: '75px', height:'75px', objectFit: 'contain'}} src={convenientImg}/>
                        <p className='intro-heading-2' style={{textAlign: 'center'}}> Thuận tiện</p>
                        <p className='intro-text-2'  style={{textAlign: 'center'}}>Giúp bạn ủng hộ trực tuyến thuận tiện và minh bạch, giám sát sao kê tài khoản thiện nguyện, lựa chọn theo dõi và đồng hành cùng các chiến dịch bạn quan tâm, dễ dàng tương tác, hỗ trợ các chiến dịch.</p>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}
