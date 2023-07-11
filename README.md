# Elice PA (최영호)

<img width="2032" alt="스크린샷 2023-07-11 22 18 35" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/e8061fab-ab9b-44da-9f8b-dc81d23f9959">

# 실행 가이드

### Requirements

- Node.js(개발 환경 노드 버전: v16.14.0)
- 패키지 매니저(yarn)

### Installation

```bash
$ git clone https://github.com/presuit/elice-frontend-pa.git
$ cd elice-frontend-pa
$ yarn install
$ yarn dev
```

# Stacks

### Environment

<div>
  <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the- 
 badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

### Config

<div>
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
</div>

### Development

<div>
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/lodash-3492FF?style=for-the-badge&logo=lodash&logoColor=white">
</div>

# 화면 구성

### 메인 페이지

<img width="2032" alt="스크린샷 2023-07-11 22 18 35" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/e8061fab-ab9b-44da-9f8b-dc81d23f9959">

### 코스 필터링

<img width="2032" alt="스크린샷 2023-07-11 22 19 55" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/4e1f2bd6-f1c7-4122-b8f1-af886e06a90f">

### 코스 검색

<img width="2032" alt="스크린샷 2023-07-11 22 20 28" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/2a4863d5-cb74-471b-b07f-f0b78451e6cc">

### 필터링 정보에 따른 코스 카드 렌더링(페이지당 20개)

<img width="2032" alt="스크린샷 2023-07-11 22 21 00" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/6eeaed94-b2fa-4b67-b384-4693b5e91384">
<img width="2032" alt="스크린샷 2023-07-11 22 21 30" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/b613917a-c16f-48e3-8c24-a87895b58e7e">
<img width="2032" alt="스크린샷 2023-07-11 22 21 54" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/4e47c187-9019-4f57-a4ca-bf8c69f0c447">

### 코스 카드 페이지네이션(현재 페이지를 기점으로 좌우 최대 4개의 페이지를 가질 수 있음.)

<img width="2032" alt="스크린샷 2023-07-11 22 21 54" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/4e47c187-9019-4f57-a4ca-bf8c69f0c447">
<img width="2032" alt="스크린샷 2023-07-11 22 22 32" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/fb97a971-0cce-4f5e-9679-ac1908047238">
<img width="2032" alt="스크린샷 2023-07-11 22 22 50" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/9d10207b-5251-4002-bcd1-d09081d61c40">

### 필터링 조건에 따라 코스 데이터가 없는 경우

<img width="2032" alt="스크린샷 2023-07-11 22 23 09" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/1cb0d086-7ba7-49b3-a525-cd931f0bb56b">

### API 서버 에러가 발생한 경우

<img width="2032" alt="스크린샷 2023-07-11 22 24 32" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/113539bd-3293-4e7f-9e1f-6b840d4311bf">

# 구현 내용

## 기본적인 요구사항을 지키며 UI 구현

- tailwindcss를 활용하여 UI 구현
- UI 구현을 위해 어떤 CSS 라이브러리를 사용할지 고민했지만, 고민 끝에 가장 자신있는 tailwindcss를 사용하여 과제를 진행했습니다.
- 구현 완료 사항
  - [x] Layout
  - [x] Search Area
  - [x] Filter(Chip)
  - [x] Body
  - [x] Course Card
    - [x] Body
    - [x] Label
    - [x] Title
    - [x] Description
    - [x] IconText
    - [x] Logo
  - [x] Pagination
    - [x] Box

### 유의사항

<table>
  <tr>
    <td valign="top"><img  width="522" alt="image" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/e03ac99d-358e-456e-83ed-d1e5bfcf4717">
</td>
    <td valign="top"><img  width="323" alt="image" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/0b877c26-3eb2-4059-9ad3-618085a8a416">
</td>
  </tr>
</table>

- Label의 역할과 과제 스크린샷에 보이는 Course Card 컴포넌트의 최하단 가격부분의 내용이 동일하여 이부분 주의해서 봐주시면 감사하겠습니다.
- 가격은 구현 목록에는 없었지만, 컴포넌트의 완성도를 높이기 위해 추가해보았습니다.

## Next.js의 API Roues 기능 활용하여 middleware API 서버 구현

- Next.js의 API Routes 기능을 활용하여 `/api/course/list` URL로 접근하면 엘카데미 코스 리스트 정보를 불러오는 `https://api-rest.elice.io/org/academy/course/list/` 에 요청하여 정보를 가져오는 로직 구현했습니다.
- CORS 구현을 위해 [cors](https://github.com/expressjs/cors#readme) 라이브러리를 활용하여 middleware API 서버로 접근하는 방식중 `GET` 방식만 받을 수 있도록 설정했습니다.

## 비동기 상태 처리를 위한 리액트 쿼리 사용

- 서버에서 가져오는 데이터와 프론트엔드에서 사용하는 데이터를 구분하기 위해 리액트 쿼리를 사용했습니다.
- 리액트 쿼리에서 제공하는 데이터 캐싱 기능을 활용하여 받아온 course 데이터는 1분동안 fresh한 상태를 유지할 수 있도록 했습니다.(default staleTime: 60_000)

## getServerSideProps를 통한 SSR 활용

- Next.js에서 페이지별 렌더링 방식을 달리 줄 수 있는데, 과제를 진행하면서 getServerSideProps 함수를 활용하여 서버에서 URL에 담긴 SearchParams를 보고 데이터를 미리 fetch 할 수 있으면 좋을 것 같다고 판단하여 진행했습니다.
- 좋다고 생각한 근거는 다음과 같습니다.
  1. SSR을 통해 HTML에 Course Card 들의 정보를 담을 수 있기 때문에 SEO 측면에서 유리하다고 생각했습니다.
  2. 서버에서 URL에 해당하는 Course 데이터를 미리 fetch 하기 때문에 클라이언트 측에서 로딩 없이 바로 Course Card 들을 볼 수 있음.
- 데이터를 패치한 방식은 리액트 쿼리에서 지원하는 hydration 방식을 사용했습니다.

## eslint, prettier 적용 및 추가 플러그인 사용

- eslint, prettier를 통해 코드 작성의 일관성을 지키면서 발생할 수 있는 에러를 미리 디버깅 할 수 있도록 처리했습니다.
- eslint에 다양한 플러그인이 존재하는데, 이 중에 [prettier와 eslint를 함께 쓸 수 있도록 도와주는 플러그인](https://github.com/prettier/eslint-config-prettier)과 [eslint 규칙에 맞게 prettier를 적용할 수 있는 플러그인](https://github.com/prettier/eslint-plugin-prettier), [import 문의 순서를 정할 수 있는 플러그인](https://github.com/import-js/eslint-plugin-import)을 사용했습니다.
- [tailwindcss에서 제공하는 prettier 플러그인](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)이 존재하여 이또한 적용시켰습니다.(자동으로 className에 들어간 요소들을 규칙에 맞게 정리해줍니다.)

## 웹 접근성을 준수하여 UI 개발

<img width="790" alt="스크린샷 2023-07-11 22 40 21" src="https://github.com/presuit/elice-frontend-pa/assets/28239963/6a813729-373b-4f9b-a223-8eae702dd6f2">

- section 태그가 붙으면 heading 태그가 붙어야 하기 때문에 heading 태그를 쓰면서 스크린 리더기에서만 읽힐 수 있도록 처리했습니다.
- 페이지 내에서 heading 태그가 꼬이지 않고, 순차적으로 쓸 수 있도록 처리했습니다.

# 프로젝트 구조

```
├── README.md
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package.json
├── postcss.config.js
├── public
│    ├── fonts : Pretendard 폰트 저장 디렉토리
│    └── images : 스태틱 이미지 파일 저장 디렉토리
├── src
│    ├── api : API 관련 비동기 로직 처리 코드가 담겨있는 디렉토리
│    ├── components : UI 구현에 필요한 컴포넌트가 담겨있는 디렉토리
│    ├── constants : 프론트엔드 개발에 필요한 상수를 저장하고 있는 디렉토리
│    ├── hooks : 커스텀 리액트 훅 저장 디렉토리
│    ├── pages: Next.js Routing을 위한 페이지 저장 디렉토리
│    │   └── api : Next.js API Routes 를 위한 디렉토리
│    ├── styles : tailwindcss 관련 스타일 정보를 담고 있는 디렉토리
│    ├── types : 프론트엔드 개발에 따른 typescript의 타입, 인터페이스를 저장하고 있는 디렉토리(API 관련 타입은 api 폴더에서 따로 처리합니다.)
│    └── utils : 프론트엔드 개발에 필요한 유틸리티 함수들을 담고 있는 디렉토리
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

# 코드로 살펴보는 Course Card 렌더링

> 필터링 조건이 변경 되거나, URL을 새로고침 하는 경우 어떻게 Course Card 들이 렌더링 되는지 코드로 살펴보겠습니다.

```jsx
// index.tsx
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['course', 'list', query, 1], {
    queryFn: () =>
      OrgCourseList.getOrgCourseList({
        count: DEFAULT_COURSE_COUNT,
        offset: 0,
        filter_conditions: JSON.stringify(query),
      }),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
```

우선 유저가 페이지에 접근하게 되면, `getServerSideProps` 함수가 호출 되며, URL에 명시 된 SearchParams를 읽어 들여 관련 데이터를 서버에서 미리 패치할 수 있도록 리액트 쿼리의 `prefetchQuery`와 `hydration`을 활용하여 처리합니다.

```jsx
// _app.tsx
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 60_000,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {' '}
      // QueryClient 설정
      <Hydrate state={pageProps.dehydratedState}>
        {' '}
        // 서버에서 패치한 데이터를 하이드레이션 시켜 프론트에서도 바로 사용할 수 있도록 합니다.
        <div className={Pretendard.className}>
          <Component {...pageProps} />
        </div>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
```

`_app.tsx` 에는 리액트 쿼리를 위한 QueryClient를 선언하고 적용하게 됩니다.

앞서 getServerSideProps로 인해 prefetch 한 쿼리는 pageProps.dehydratedState 에 담기게 되고, 이를 리액트 쿼리의 <Hydrate/> 컴포넌트에 전달해주면, 서버에서 prefetch 한 쿼리를 바로 사용할 수 있게 됩니다.

이를 통해 유저는 페이지가 로드 된 이후, 바로 필터링이 적용 된 Course Card 아이템들을 볼 수 있게 됩니다.

```jsx
//useCourseList.ts
interface Props {
  page: number
  filterConditions: ParsedUrlQuery
}

export function useCourseList({ page, filterConditions }: Props) {
  return useQuery(['course', 'list', filterConditions, page], {
    queryFn: () =>
      OrgCourseList.getOrgCourseList({
        count: DEFAULT_COURSE_COUNT,
        offset: (page - 1) * DEFAULT_COURSE_COUNT,
        filter_conditions: JSON.stringify(filterConditions),
      }),
    keepPreviousData: true,
  })
}
```

이후 클라이언트쪽에선 `useCourseList` 라는 커스텀 훅으로 감싼 리액트 쿼리의 `useQuery` 호출을 통해 앞서 패치한 데이터를 받게 되고,
이를 이용하여 렌더링에 필요한 데이터를 전해줄 수 있습니다.

`useCourseList` 가 의존하고 있는 데이터는 총 2가지로
페이지(`page`)의 값이 바뀌거나, 필터링 조건(`filterConditions`)이 변경 되면 `useQuery`의 쿼리 키 값이 변경 되어 새로운 조건으로 서버에 데이터를 요청하게 됩니다.

```jsx
//CouseList.tsx
const { data, isLoading, error } = useCourseList({
  page,
  filterConditions: router.query,
})
```

여기서 말하는 필터링 조건은 URL에 담긴 SearchParams가 변경 될 때이며, 이는 Next.js의 `router.query`로 관리 됩니다.

서버로부터 데이터를 받아왔다면, 이를 이용하여 CourseCard 컴포넌트들을 렌더링 합니다.

```jsx
//CourseList.tsx
const [page, setPage] = useState(PAGINATION_MINIMUM_PAGE) // 페이지 정보는 CourseCardList에서만 사용되기 때문에 글로벌 스테이트로 분류하지 않고, 로컬 스테이트를 활용했습니다.
const router = useRouter()
const scrollRef = usePageTriggerScroll(page) // 현재 유저의 뷰포트가 어디에 위치하느냐에 따라 페이지 이동시에 뷰포트를 어디까지 스크롤할지 결정하는 커스텀 훅입니다.
const { data, isLoading, error } = useCourseList({
  page,
  filterConditions: router.query,
})

useEffect(() => {
  // SearchParams가 변경 되었다면 필터링 조건이 변경 되었기 때문에 페이지 값을 초기화 시킵니다.
  setPage(PAGINATION_MINIMUM_PAGE)
}, [router.query])

if (isLoading) {
  // 로딩 중이라면 컴포넌트에는 아무것도 표현하지 않습니다.
  return <></>
}

if (error || !data) {
  // 서버로부터 데이터 패치 중, 에러가 발생하거나, 데이터 값이 undefined인 경우 에러 메세지를 표시합니다.
  return <NotFound cause={'에러가 발생했습니다: Internal Server Error'} />
}

if (isOrgCourseErrorResponses(data)) {
  // 정상적으로 서버와 통신했지만, 서버에 전달한 인자가 잘못 된 경우를 판단하여 에러 메세지를 표시합니다.
  return <NotFound cause={`에러가 발생했습니다: ${data.fail_message}`} />
}

if (data.course_count === 0 || data.courses.length === 0) {
  // 정상적으로 서버와 통신했지만, 필터링 조건에 의해 데이터가 없다면 데이터가 없다는 UI를 표시합니다.
  return <NotFound cause="검색 결과가 없습니다." />
}

return (
  <div>
    <div ref={scrollRef} className="border-b border-zinc-200 py-3 text-xs font-medium">
      전체 {data.course_count}개
    </div>
    <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.courses.map(course => (
        <li key={course.id}>
          <a href="#">
            <CourseCard // 서버에서 제공하는 다양한 요소중, 과제의 CourseCard 컴포넌트 구현에 필요한 요소만 넘겨줍니다.
              enrollType={course.enroll_type}
              isFree={course.is_free}
              logoFileUrl={course.logo_file_url}
              shortDescription={course.short_description}
              title={course.title}
            />
          </a>
        </li>
      ))}
    </ul>
    <Pagination page={page} setPage={setPage} maxPage={Math.ceil(data.course_count / DEFAULT_COURSE_COUNT)} />
  </div>
)
```

# 필터링 조건을 변경하는 경우

필터링 조건을 변경할 수 있는 액션엔 크게 2가지 있습니다.

1. 검색창을 활용하여 검색
2. 필터링에 사용 되는 Chip을 클릭

두 방식 모두 공통적으로 적용 되는 사항은 액션의 결과로 바뀌는 값은 결국 URL의 SearchParams 이고, 이를 Course Card 컴포넌트를 렌더링하는 곳에서 변경점이 생겼는지 파악하여 렌더링 하게 된다는 점입니다.

## 검색창을 활용하여 검색

그렇다면 먼저 검색창을 활용하여 검색하게 되면, 어떻게 작동하는지 알아보겠습니다.

```jsx
export default function SearchInput() {
  const router = useRouter()

  const deferredFunc = debounce((value: string) => {
    // input 태그의 onChange 이벤트에 의해 input 값이 변경 될 때마다 호출 되지만, debounce 값을 300ms 로 지정했기 때문에 300ms 마다 한번씩 실행 됩니다.
    const url = new URL(location.href)
    if (value.length > 0) url.searchParams.set('keyword', value)
    else url.searchParams.delete('keyword')
    router.replace(url, undefined, { shallow: true })
  }, 300)

  return (
    <div className="my-3 flex items-center overflow-hidden rounded border border-input-background bg-white">
      <IcoSearch classname="mx-4" />
      <input
        type="text"
        className="flex-1 py-3 pr-4 text-sm outline-none placeholder:text-[gray]"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        onChange={e => deferredFunc(e.target.value)}
      />
    </div>
  )
}
```

흔하게 `<input/>` 태그를 리액트에서 쓰는 방식은 input의 value를 추적하는 로컬 스테이트를 생성하고, 이를 `onChange` 이벤트가 호출 될 때마다 업데이트를 시켜주고, 이를 활용하여 로직을 처리하게 됩니다.

하지만 이번 과제에서 input의 값을 바탕으로 URL의 SearchParams만 변경하기 때문에 굳이 `onChange` 이벤트가 호출 될 때마다 로컬 스테이트를 선언하여 리렌더링을 발생시키지 않고, 디바운스 함수를 통해 300ms 마다 SearchParams를 변경할 수 있도록 했습니다.

`router.replace` 메소드를 활용하여 URL을 변경하지 않고 SearchParams 만 변경하고, 이를 `router.query`가 변경하도록 트리거하여 다른 컴포넌트에서도 필터링 조건이 변경 됨을 인지할 수 있도록 처리했습니다.

또한 페이지 렌더링 방식에 `getServerSideProps`를 통한 SSR을 매 요청마다 사용하고 있기 때문에, `router.replace`에 옵션으로 `shallow`를 추가해주었습니다.

`shallow`가 true면, `router.replace`로 인해 `getServerSideProps`가 다시 동작하지 않고, 클라이언트 측에서만 SearchParams를 변경할 수 있기 때문에 빠르게 필터링 변경 및 적용이 가능해집니다.

## Chip을 클릭하여 필터링

필터링을 위해 Chip을 클릭하면 URL의 SearchParams가 변경 되고, 마찬가지로 이는 router.query의 업데이트를 유발시키기 때문에 CourseCard 관련 렌더링을 담당하는 컴포넌트에서 새로운 필터링 조건을 가지고 렌더링을 진행할 수 있게 됩니다.

```jsx
export default function Chip({ id, name, filterCondition }: Props) {
  const router = useRouter()
  const [active, setActive] = useState(false)

  function handleClickChip() {
    // Chip을 클릭하는 경우 동작하는 핸들러 함수
    if (!filterCondition) return

    const url = new URL(location.href)

    if (active && url.searchParams.has(filterCondition)) {
      // 현재 클릭한 Chip이 활성화 상태에서 클릭한 경우이니 Chip을 비활성화 시키고 SearchParams에서 제외해야 합니다.
      const optionList = url.searchParams.getAll(filterCondition) // 동일 카테고리의 복수개의 옵션을 선택할 수 있기에 전체를 선택합니다.
      if (optionList.length > 1) {
        // 옵션이 한개 이상이라면...
        const filteredOptionList = optionList.filter(option => option !== id) // 현재 Chip이 가지는 옵션을 제외한 나머지 옵션만 추립니다.
        url.searchParams.delete(filterCondition) // SearchParams에 해당 카테고리의 옵션들을 전부 지우고
        filteredOptionList.forEach(option => url.searchParams.append(filterCondition, option)) // 앞서 추렸던 나머지 옵션들로만 새로 SearchParams를 업데이트합니다.
      } else {
        url.searchParams.delete(filterCondition) // 동일 카테고리에 해당 옵션만 존재하기 때문에 SearchParams에서 삭제합니다.
      }
    } else {
      url.searchParams.append(filterCondition, id) // 현재 SearchParams에 존재하지 않는 경우이기 때문에 SearchParams에 추가해줍니다.
    }
    router.replace(url, undefined, { shallow: true }) // 최종적으로 router.replace로 SearchParams를 변경합니다.
  }

  useEffect(() => {
    // Chip이 마운트 되고, URL의 SearchParams에 따라 활성화 상태인지 아닌지 판단합니다.
    const queryValues = router.query[filterCondition]

    if (queryValues) {
      if (Array.isArray(queryValues)) {
        setActive(queryValues.includes(id))
      } else {
        setActive(queryValues === id)
      }
    } else {
      setActive(false)
    }
  }, [router.query, filterCondition, id])

  return (
    <button
      id={id}
      name={name}
      className={classNames(
        'm-2 rounded-[1.875rem] border border-main-background px-3 py-1 text-sm transition-colors',
        { 'bg-elice-purple text-white': active },
        { 'bg-main-background': !active },
      )}
      onClick={handleClickChip}
    >
      {name}
    </button>
  )
}
```

이후 `router.replace` 에 의해 `router.query`가 업데이트 되고, 이는 Course Card 컴포넌트를 렌더링하는 조건을 변경시켜 새로운 필터링 조건에 따른 새로운 Course Card 컴포넌트들을 렌더링 합니다.
