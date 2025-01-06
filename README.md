## sample-book-server

NestJS sample 백엔드 서버. (node ^20 필요)

## Getting Started

### 1. 의존성 설치
```
> npm install
```

### 2. Supabase 설정

Supabase에 가입한 다음 새로운 프로젝트를 생성합니다.

프로젝트 생성이 완료되었다면 Settings 페이지로 이동한 다음  
좌측 사이드바의 `Configuration > Database` 섹션에서 상위 `Connect` -> `Session pooler`를 복사합니다.  


복사한 `Connection String`을 `.env` 파일을 생성하여 다음과 같이 붙여넣습니다.

```
// .env
DATABASE_URL="방금 복사한 Connection String"
```

이때 `Connection String`의 `[YOUR-PASSWORD]` 부분을 자신이 설정한 비밀번호로 수정합니다.

<details>
<summary><b>비밀번호를 까먹었다면?</b></summary>
<div markdown="1">

앞서 `Connection String`을 복사한 페이지에서 드래그를 내려보면 아래 그림과 같이 `Reset database password` 버튼을 발견할 수 있습니다.  
해당 버튼을 클릭해 새로운 비밀번호로 재 설정한 다음 `.env` 파일에 붙여넣습니다.


</div>
</details>

### 3. 데이터베이스 스키마 설정

```
npx prisma db push
```

### 4. 시드 데이터 삽입

> (참고) 삽입되는 시드 데이터는 프로젝트 `prisma/seed/data.ts` 파일에서 확인할 수 있습니다.

```
npm run seed
```

### 5. 서버 실행

```
> npm run build
> npm run start
```

(참고) 개발모드로 서버를 실행하고 싶다면 다음 명령어를 입력합니다.

```
> npm run start:dev
```

### 6. 데이터베이스 실시간 확인

```
npx prisma studio
```

### 7. API 문서 확인하기

**http://localhost:12345/api**

