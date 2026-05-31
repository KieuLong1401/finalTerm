// ========== 강좌 데이터 ==========
const coursesData = [
	{
		id: 'CS101',
		code: 'CS101',
		section: '1',
		name: '자료구조',
		professor: 'Kim T.A',
		professorFull: 'Kim Tae-hyun',
		time: '월 09:00-10:15; 수 09:00-10:00',
		schedule: '2,09:00,10:15;4,09:00,10:00',
		credits: 3,
		students: 35,
		capacity: 40,
		rating: 4.5,
		description:
			'컴퓨터 과학의 기초가 되는 자료구조를 학습합니다. 배열, 연결 리스트, 스택, 큐 등을 다룹니다.',
		detailPageUrl: './course-detail.html?id=CS101',
		professorRatingUrl: './professor-rating.html?prof=Kim',
	},
	{
		id: 'CS102',
		code: 'CS102',
		section: '1',
		name: '시스템 프로그래밍',
		professor: 'Lee S.W',
		professorFull: 'Lee Sung-woo',
		time: '화 11:30-12:45; 목 11:30-12:45',
		schedule: '3,11:30,12:45;5,11:30,12:45',
		credits: 3,
		students: 28,
		capacity: 30,
		rating: 4.8,
		description: '운영체제와 저수준 프로그래밍을 통해 시스템의 동작 원리를 이해합니다.',
		detailPageUrl: './course-detail.html?id=CS102',
		professorRatingUrl: './professor-rating.html?prof=Lee',
	},
	{
		id: 'AI201',
		code: 'AI201',
		section: '2',
		name: 'AI 입문',
		professor: 'Park H.B',
		professorFull: 'Park Hyun-bae',
		time: '월 14:15-16:15',
		schedule: '2,14:15,16:15',
		credits: 2,
		students: 42,
		capacity: 45,
		rating: 4.3,
		description: '인공지능의 기초 개념과 머신러닝의 핵심을 학습합니다.',
		detailPageUrl: './course-detail.html?id=AI201',
		professorRatingUrl: './professor-rating.html?prof=Park',
	},
	{
		id: 'MATH05',
		code: 'MATH05',
		section: '1',
		name: '이산수학',
		professor: 'Choi Y.J',
		professorFull: 'Choi Young-jae',
		time: '수 14:15-16:15; 목 15:30-16:30',
		schedule: '4,14:15,16:15;5,15:30,16:30',
		credits: 3,
		students: 38,
		capacity: 40,
		rating: 4.6,
		description:
			'컴퓨터 과학에 필요한 이산수학의 이론을 습득합니다. 집합, 그래프, 논리 등을 다룹니다.',
		detailPageUrl: './course-detail.html?id=MATH05',
		professorRatingUrl: './professor-rating.html?prof=Choi',
	},
	{
		id: 'ENG10',
		code: 'ENG10',
		section: '4',
		name: '학술 영어',
		professor: 'J. Smith',
		professorFull: 'James Smith',
		time: '금 10:15-12:15',
		schedule: '6,10:15,12:15',
		credits: 2,
		students: 25,
		capacity: 30,
		rating: 4.4,
		description: '학술 논문 작성과 프레젠테이션을 위한 영어를 학습합니다.',
		detailPageUrl: './course-detail.html?id=ENG10',
		professorRatingUrl: './professor-rating.html?prof=Smith',
	},
]

// ========== 시스템 설정 객체 ==========
const systemConfig = {
	registrationStartDate: new Date(2026, 4, 20), // 2026년 5월 20일
	registrationEndDate: new Date(2026, 5, 10), // 2026년 6월 10일
	isRegistrationOpen: () => {
		const now = new Date()
		return now >= systemConfig.registrationStartDate && now <= systemConfig.registrationEndDate
	},
}

const timetable = document.getElementById('timetable')
timetable.style.position = 'relative'
const timeLabels = Array.from({ length: 10 }, (_, i) => `${9 + i}:00`)

const parseTime = (timeString) => {
	const [hour, minute] = timeString.split(':').map(Number)
	return hour * 60 + minute
}

const formatTime = (timeString) => {
	const [hour, minute] = timeString.split(':')
	return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`
}

const getScheduleSegments = (scheduleString) => {
	return scheduleString.split(';').map((entry) => {
		const [day, start, end] = entry.split(',').map((value) => value.trim())
		return {
			day,
			start: parseTime(start),
			end: parseTime(end),
			startLabel: start,
			endLabel: end,
		}
	})
}

const occupiedSegments = {}

// 시간표 드롭 존 생성 (월-금, 9:00-19:00)
for (let row = 0; row < timeLabels.length; row++) {
	const labelCell = document.createElement('div')
	labelCell.className = 'time-slot'
	labelCell.innerHTML = `<span>${timeLabels[row]}</span>`
	timetable.appendChild(labelCell)

	for (let col = 2; col <= 6; col++) {
		const zone = document.createElement('div')
		zone.className = 'drop-zone'
		zone.dataset.day = col
		zone.dataset.hour = 9 + row
		zone.style.position = 'relative'
		timetable.appendChild(zone)
	}
}

// --- 2. 드래그 & 드롭 이벤트 처리 ---
let draggedCard = null
const totalCreditsEl = document.getElementById('total-credits')
let activeCredits = 0
let registeredCourses = {} // 수강 강좌 저장 (시간 충돌 방지)

document.querySelectorAll('.course-card').forEach((card) => {
	card.addEventListener('dragstart', (e) => {
		draggedCard = card
		e.dataTransfer.setData('text/plain', card.dataset.id)
		card.style.opacity = '0.5'
	})

	card.addEventListener('dragend', () => {
		card.style.opacity = '1'
		document
			.querySelectorAll('.drop-zone, .reserve-zone')
			.forEach((z) => z.classList.remove('drag-over'))
	})
})

// 시간표 드롭 존 이벤트 설정
document.querySelectorAll('.drop-zone').forEach((zone) => {
	zone.addEventListener('dragover', (e) => {
		e.preventDefault()
		zone.classList.add('drag-over')
	})

	zone.addEventListener('dragleave', () => {
		zone.classList.remove('drag-over')
	})

	zone.addEventListener('drop', (e) => {
		e.preventDefault()
		zone.classList.remove('drag-over')

		if (!draggedCard) return

		const courseId = draggedCard.dataset.id
		const courseName = draggedCard.dataset.name
		const courseProf = draggedCard.dataset.prof
		const credits = parseInt(draggedCard.dataset.credit)
		const scheduleEntries = getScheduleSegments(draggedCard.dataset.schedule)

		// 이미 등록된 강좌인지 확인
		if (registeredCourses[courseId]) {
			alert('이 강좌는 이미 시간표에 추가되었습니다!')
			return
		}

		let hasConflict = false
		const courseSegments = []

		scheduleEntries.forEach((entry) => {
			const startHour = Math.floor(entry.start / 60)
			const endHour = Math.ceil(entry.end / 60)
			let entryConflict = false

			for (let hour = startHour; hour < endHour; hour++) {
				const segmentStart = hour === startHour ? entry.start % 60 : 0
				const segmentEnd = hour === endHour - 1 ? entry.end % 60 || 60 : 60
				if (segmentStart >= segmentEnd) continue

				const dayHourKey = `${entry.day}-${hour}`
				const existing = occupiedSegments[dayHourKey] || []
				const seg = { start: segmentStart, end: segmentEnd, courseId }

				if (
					existing.some(
						(existingSeg) => existingSeg.start < seg.end && seg.start < existingSeg.end,
					)
				) {
					hasConflict = true
					entryConflict = true
				}
			}

			if (!entryConflict) {
				courseSegments.push({
					day: entry.day,
					start: entry.start,
					end: entry.end,
					startHour,
					endHour,
					label: `${entry.startLabel} — ${entry.endLabel}`,
				})
			}
		})

		if (hasConflict) {
			alert('시간표 충돌! 다른 강좌의 시간을 확인해주세요.')
		}

		const firstZone = document.querySelector('.drop-zone[data-day="2"][data-hour="9"]')
		const hourHeight = firstZone ? firstZone.getBoundingClientRect().height : 0

		courseSegments.forEach((segment) => {
			const startZone = document.querySelector(
				`.drop-zone[data-day="${segment.day}"][data-hour="${segment.startHour}"]`,
			)
			if (!startZone) return

			const left = startZone.offsetLeft
			const top = startZone.offsetTop + ((segment.start % 60) / 60) * hourHeight
			const width = startZone.getBoundingClientRect().width
			const height = ((segment.end - segment.start) / 60) * hourHeight

			const placed = document.createElement('div')
			placed.className = 'placed-course'
			placed.dataset.courseId = courseId
			placed.style.position = 'absolute'
			placed.style.left = `${left + 2}px`
			placed.style.top = `${top + 2}px`
			placed.style.width = `${width - 4}px`
			placed.style.height = `${height - 4}px`
			placed.innerHTML = `
				<div class="title">${courseName}</div>
				<div class="details">GS. ${courseProf}</div>
				<div class="details">${segment.label}</div>
				<div class="remove-btn" onclick="removeCourse('${courseId}')">×</div>
			`
			timetable.appendChild(placed)

			for (let hour = segment.startHour; hour < segment.endHour; hour++) {
				const dayHourKey = `${segment.day}-${hour}`
				occupiedSegments[dayHourKey] = occupiedSegments[dayHourKey] || []
				occupiedSegments[dayHourKey].push({
					start: hour === segment.startHour ? segment.start % 60 : 0,
					end: hour === segment.endHour - 1 ? segment.end % 60 || 60 : 60,
					courseId,
				})
			}
		})

		registeredCourses[courseId] = courseSegments
		activeCredits += credits
		totalCreditsEl.textContent = activeCredits
	})
})

// 시간표에서 강좌 삭제
window.removeCourse = function (courseId) {
	const segments = registeredCourses[courseId]
	if (segments) {
		segments.forEach((segment) => {
			timetable
				.querySelectorAll(`.placed-course[data-course-id="${courseId}"]`)
				.forEach((node) => node.remove())
			for (let hour = segment.startHour; hour < segment.endHour; hour++) {
				const dayHourKey = `${segment.day}-${hour}`
				occupiedSegments[dayHourKey] = (occupiedSegments[dayHourKey] || []).filter(
					(item) => item.courseId !== courseId,
				)
			}
		})

		const originalCard = document.querySelector(`.course-card[data-id="${courseId}"]`)
		if (originalCard) {
			activeCredits -= parseInt(originalCard.dataset.credit)
			totalCreditsEl.textContent = activeCredits
		}
		delete registeredCourses[courseId]
	}
}

// --- 3. 예비 강좌 영역 처리 (오른쪽 사이드바) ---
const reserveZone = document.getElementById('reserve-zone')

reserveZone.addEventListener('dragover', (e) => {
	e.preventDefault()
	reserveZone.classList.add('drag-over')
})

reserveZone.addEventListener('dragleave', () => {
	reserveZone.classList.remove('drag-over')
})

reserveZone.addEventListener('drop', (e) => {
	e.preventDefault()
	reserveZone.classList.remove('drag-over')

	if (!draggedCard) return

	const courseId = draggedCard.dataset.id
	const courseName = draggedCard.dataset.name
	const courseProf = draggedCard.dataset.prof
	const courseTime = draggedCard.dataset.time

	// 예비 목록에 중복이 있는지 확인
	if (reserveZone.querySelector(`[data-reserve-id="${courseId}"]`)) {
		alert('이 강좌는 이미 예비 목록에 있습니다!')
		return
	}

	// 예비 강좌 카드 생성
	const reserveCard = document.createElement('div')
	reserveCard.className = 'reserve-card'
	reserveCard.setAttribute('data-reserve-id', courseId)
	reserveCard.innerHTML = `
                <div class="remove-btn" onclick="this.parentElement.remove()">×</div>
                <div class="name">${courseName}</div>
                <div class="meta">Mã: ${courseId} | GS. ${courseProf}</div>
                <div class="meta" style="color:#888; margin-top:2px;">Lịch: ${courseTime}</div>
            `

	reserveZone.appendChild(reserveCard)
})

// ========== 4. 배열 데이터로 강좌 렌더링 ==========

/**
 * 강좌 데이터로부터 카드 요소 생성
 */
function createCourseCardElement(course) {
	const cardDiv = document.createElement('div')
	cardDiv.className = 'course-card'
	cardDiv.draggable = true
	cardDiv.dataset.id = course.id
	cardDiv.dataset.name = course.name
	cardDiv.dataset.prof = course.professor
	cardDiv.dataset.time = course.time
	cardDiv.dataset.schedule = course.schedule
	cardDiv.dataset.credit = course.credits

	cardDiv.innerHTML = `
		<div class="course-code">${course.code} (분반 ${course.section})</div>
		<div class="course-name">${course.name}</div>
		<div class="course-info">
			<a href="/professors/${course.professor}">${course.professor}</a>
			<span class="course-tag">${course.time}</span>
		</div>
	`

	return cardDiv
}

/**
 * coursesData 배열의 모든 강좌를 course-list에 렌더링
 */
function renderCoursesFromData() {
	const courseList = document.querySelector('.course-list')
	if (!courseList) return

	// 기존 강좌 삭제
	courseList.querySelectorAll('.course-card').forEach((card) => card.remove())

	// 배열에서 새로운 강좌 생성
	coursesData.forEach((course) => {
		const cardElement = createCourseCardElement(course)
		courseList.appendChild(cardElement)

		// 툴팁 이벤트 리스너 연결
		addListener(cardElement)
	})
}

/**
 * 이벤트 리스너 연결
 */
function addListener(cardElement) {
	// 드래그 드롭 이벤트 리스너 연결
	cardElement.addEventListener('dragstart', (e) => {
		draggedCard = cardElement
		e.dataTransfer.setData('text/plain', cardElement.dataset.id)
		cardElement.style.opacity = '0.5'
	})

	cardElement.addEventListener('dragend', () => {
		cardElement.style.opacity = '1'
		document
			.querySelectorAll('.drop-zone, .reserve-zone')
			.forEach((z) => z.classList.remove('drag-over'))
	})
}

// DOM 로드 후 강좌 초기화
document.addEventListener('DOMContentLoaded', () => {
	renderCoursesFromData()
})
