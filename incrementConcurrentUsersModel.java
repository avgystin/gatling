package models;

import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;

public class incrementConcurrentUsersModel extends Simulation {

    HttpProtocolBuilder httpProtocol =
            http
                    .shareConnections()
                    .baseUrl("https://avgystin.ru/")
                    .acceptHeader("text/html");

    ScenarioBuilder hello = scenario("My Scenario")
            .repeat(50).on(
                pace(1)
                        .exec(http("hello").get("/api/v1.0/get-#{randomInt(1,6)}"))
            );
            //.pause(1);


    {
        setUp(
                // создать закрытый профиль инъекции рабочей нагрузки
                // с уровнями 10, 15, 20, 25 и 30 одновременных пользователей
                // каждый уровень длится 10 секунд
                // разделен линейными пандусами длительностью 10 секунд
                hello.injectClosed(
                        incrementConcurrentUsers(1000)   //
                                .times(1)   //
                                .eachLevelLasting(3600)   //
                                .separatedByRampsLasting(300)   //
                                .startingFrom(0) // Int стартовое значение
                )
        ).protocols(httpProtocol);
    }
}
