<script>
  export let data
</script>

    <div class="description">
      <div class="date">
        <h4>DATE:</h4>
        <p>{data.project.date}</p>
      </div>
    
      <div class="client">
        <h4>CLIENT:</h4>
        <p>{data.project.client}</p>
      </div>
    </div>

<style>

.description {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 80%;
  width: 50%;
}

.date {
  margin-bottom: 1rem;
}

h4 {
  font-weight: 600;
  letter-spacing: 2px;
}

p {
  font-weight: 300;
}
</style>