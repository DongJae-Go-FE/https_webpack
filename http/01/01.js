//01.http
/**
 * 모든 것이 http 기반에 위에서 동작한다.
 * 
 */

//인터넷 네트워크
/**
 * 
 * 인터넷 통신
 * 인터넷에서 컴퓨터는 둘은 어떻게 통신?
 * 인터넷 망을 통해 요청을 보내고 노드라는 서버를 걸쳐서 보낸다
 */

//IP
/**
 * - IP주소를 할당
 * - InternetProtocol 인터넷 프로토콜
 * - 지정한 IP주소(IP Address)에 데이터 전달
 * - 패킷(packet)이라는 통신 단위로 데이터 전달
 * 
 *   패킷
 * - 아이피 패킷이라는 규칙이 있는데
 * - 출발지(나의) IP, 목적지(받는 사람) IP, 내용이 들어았는 아이피 패킷을 만들어서 전송한다.
 * 
 * 
 *   서버 패킷 - 응답
 * - 서버 패킷은 패킷 전달을 역으로 전달한다.
 * 
 * 
 * 
 *
 * 
 * 
 * 그러나 IP 프로토콜의 한계가 있다
 * - 비연결성 : 패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷 전송 // 상대방이 주소에 안살아도 그냥 편지 보내는 것 같은
 * - 비신뢰성
 *      - 중간에 패킷이 사라지면?
 *      - 패킷이 순서대로 안오면?
 * - 프로그램 구분
 *      - 같은 IP를 사용하는 서버에서 통신하는 애플리케이션이 둘 이상이면?
 * 
 * 
 * 
 * 
 * - 요청이 1500바이트가 넘으면 요청을 나눠서 보낸다.
 * 
 * 
 * 
 * 
 * 
 * 
 * TCP
 * - 요청이 끊기고 순서가 바뀌고 이런것을 해결해준다.
 * 
 * 인터넷 프로토콜 스택의 4계층
 * - 애플리케이션 계층 - HTTP, FTP / 웹 브라우저 , 게임 등등...  / 입력한 거, 메세지 데이터
 * - 전송 계층 - TCP, UDP /os 같은// 입력하걸 TCP정보 감싸고 메세지 데이터 포함
 * - 인터넷 계층 - IP /os 같은 // IP패킷으로 감싸고 TCP 데이터 포함
 * - 네트워크 인터페이스 계층 / 랜드리아버 같은 // 서버로 전송
 * 
 * 
 *  그런데 패킷이라는게 뭐야?
 *  수화물을 뜻하는 패키지라는 것과 버킷의 결합
 * 
 * 
 * 패킷 안에는 TCP/IP가 들어간다.
 * 
 * TCP/IP 패킷 정보
 * 
 *  IP 패킷 안에는
 *  - 출발지 IP
 *  - 목적지 IP
 *  - 기타....
 * 
 *  TCP 세그먼트 안에는
 *      - 출발지 PORT, 목적지 PORT
 *      - 전송 제어, 순서, 검증 정보
 *      - 전송 데이터를 넣기도 한다
 * 
 * TCP 특징
 * 인터넷 프로토콜 스택의 4계층에서 IP계층 위에 있다,  전송 제어 프로토콜(Transmission Control Protocol)
 *  - 연결지향 - TCP 3 way handShake (가상 연결) //소켓 연결이라고도 한다// 쟤랑 나랑 연결하고 보냄  너 연결 했어? 확인
 *      - 순서는
 *      - 1. 클라이언트에서 서버로 syn(싱크로나이즈, 접속 요청)을 한다.
 *      - 2. 서버에서 클라이언트에게 syn(싱크로나이즈, 접속 요청), ACK(액크, 요청 수락)를 함께 한다.
 *      - 3. 클라이언트도 서베어 ACK(액크, 접속 요청을 한다.)
 *      - 서로를 믿을 수 있다.
 *      - 4. 서로 데이터 전송 가능
 *      - 주의! 진짜 연결은 아님 가상 연결임 논리적으로 완료라고 생각
 * 
 *  - 데이터 전달 보증 // 누락일 경우 알 수 있다.
 *      - 1. 클라이언트 - 데이터 전송
 *      - 2. 서버 - 데이터 잘 받았음이라고 답장 // 만약에 문제가 있을 경우 답장을 안 받아
 *  - 순서 보장 
 *      - 패킷을 순서대로 안보낼경우
 *      - 서버에서 순서대로 보내라고 명령 보내줌
 *  - 신뢰할 수 있는 프로토콜
 *  - 현재는 대부분 TCP사용
 * 
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *
 * UDP
 * 인터넷 프로토콜 스택의 4계층에서 IP 계층 위에 있고 TCP랑 동일한 계층에 있다. 
 * 사용자 데이터그램 프로토콜(User Datagram Protocol)
 * 
 * - 하얀 도화지에 비유(기능이 거의 없음)
 * - 연결지향 - TCP 3 way handshake X
 * - 데이터 전달 보증 X
 * - 순서 보장 X
 * - 데이터 전달 및 순서가 보장되지 않지만, 단순하고 빠름
 * - 정리
 *      - IP와 거의 같다, +PORT, +체크섬 정도만 추가
 *      - 애플리케이션에서 추가 작업 필요
 *      - PORT란 하나의 IP에서 애플리케이션을 구분할 때 사용(데스크탑임? 모바일임? 패드임?)
 * 
 *  최근에 각광 최적화에 좋아서 핸드세이크도 제거를 위해
 * 
 * 
 * 
 * 
 * 
 * 
 * PORT
 * 한 아이피에서 둘 이상 연결해야 하는 문제가 대두 그래서 PORT(항구)라는 게 등장
 * 아이피 만으로 구분하는 게 문제임
 * 아이피에 더해서 PORT라는게있는데
 * PORT는 애플리케이션을 구분하는 거
 * 
 * 
 *  - 서버에서 어떻게 포트까지 알지? 패킷 안에 있으니깐
 *  - 아이피가 아파트이면 포트는 몇동 몇호라고 이해해라
 * 
 * 
 * 특징
 *      - 0 ~ 65535 할당 가능
 *      - 0 ~ 1023: 잘 알려진 포트, 사용하지 않는 것이 좋으 
 *      - FTP - 20, 21
 *      - TELNET - 23
 *      - HTTP - 80
 *      - HTTPS - 443
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * DNS
 * 도메인 네임 시스템(Domain Name System)
 * 
 * IP의 단점
 *  - 아이피는 기억하기 어렵다.
 *  - 아이피는 변경될 수 있다.
 * 인해 등장
 * 
 * 특징
 *  - 전화번호부
 *  - 도메인 명을 IP 주소로 변환
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 전체 정리
 * - 인터넷 통신
 * - IP 인터넷 프로토콜 / 복잡한 인터넷 망을 메세지를 보내기 위해서는 인터넷 프로토콜이라는 IP가 있어야함
 * - TCP, UDP   // 아이피 프로토콜만 가지고는 포트도 없고 전송 순서도 못 맞추고 전송 보증도 못하니 TCP를 사용,
 *  UDP 거의 아이피랑 같지만 Port 있고 TCP 위에 확장가능 
 * - PORT - 항구 하나의 아이피에 여러개를 연결해야할 경우 PORT라는 것을 통해 구분
 * - DNS - 아이피는 기억하기 어렵고 변경될 수 있어서 , 도메인명을 IP 주소로 변환
 */